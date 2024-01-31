/// <reference types="ctx-core" />
import { jwt__expiration__is_valid_ } from '@ctx-core/jwt'
import { localStorage__sync } from '@ctx-core/local-storage'
import { ondelete_be_ } from 'ctx-core/be'
import { is_browser_ } from 'ctx-core/env'
import { bad_credentials_error_ } from 'ctx-core/error'
import { be_memo_pair_, memo_ } from 'ctx-core/rmemo'
import { auth0__in__token_ } from '../auth0__in__token/index.js'
import { auth0__token__clear } from '../auth0__token__clear/index.js'
import { auth0__token__error__logout } from '../auth0__token__error__logout/index.js'
import { auth0__token__json_, auth0__token__json__set } from '../auth0__token__json/index.js'
/** @typedef {import('@ctx-core/jwt').JwtToken}JwtToken */
export const [
	auth0__token$_,
	auth0__token_,
] = /** @type {be_memo_pair_T<JwtToken|nullish>} */
	be_memo_pair_(
		ondelete_be_((ctx, be)=>{
			const auth0__token$ = memo_(
				()=>
					auth0__in__token_(ctx)?.error
						? null
						: auth0__in__token_(ctx)
			).add(ctx=>{
				if (is_browser_()) {
					const onstorage = evt=>storage__auth0__token__json__set(ctx, evt)
					window.addEventListener('storage', onstorage)
					be.ondelete(()=>{
						window.removeEventListener('storage', onstorage)
					})
				}
			}).add(()=>{
				if (auth0__token__json_(ctx) == null) {
					auth0__token__clear(ctx)
					return
				}
				if (is_browser_()) {
					localStorage__sync('auth0__token__json', auth0__token__json_(ctx))
					if (auth0__token__json_(ctx)) {
						queueMicrotask(()=>
							auth0__token__validate__schedule(ctx))
					}
				}
			})
			return auth0__token$
		}, { id: 'auth0__token' }))
export {
	auth0__token$_ as auth0__token__,
	auth0__token$_ as auth0_token__,
	auth0__token$_ as auth0_token$_,
}
function auth0__token__validate__schedule(ctx) {
	const auth0__token = auth0__token_(ctx)
	const id_token =
		auth0__token === null
		|| auth0__token === void 0
			? void 0
			: auth0__token.id_token
	if (!id_token) return
	if (auth0__token) {
		const { id_token } = auth0__token
		if (!jwt__expiration__is_valid_(id_token)) {
			auth0__token__error__logout(
				ctx,
				bad_credentials_error_(
					'Session Expired',
					{ data: { id_token } }))
		}
	}
}
/**
 * @param {Ctx}ctx
 * @param {StorageEvent}event
 */
function storage__auth0__token__json__set(ctx, event) {
	if (event.key === 'auth0__token__json') {
		auth0__token__json__set(ctx, event.newValue)
	}
}
