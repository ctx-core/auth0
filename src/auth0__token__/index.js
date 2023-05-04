import { has_dom } from '@ctx-core/dom'
import { bad_credentials_error_ } from '@ctx-core/error'
import { jwt__expiration__is_valid_ } from '@ctx-core/jwt'
import { localStorage__sync } from '@ctx-core/local-storage'
import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__in__token__ } from '../auth0__in__token__/index.js'
import { auth0__token__clear } from '../auth0__token__clear/index.js'
import { auth0__token__error__logout } from '../auth0__token__error__logout/index.js'
import { auth0__token__json__, auth0__token__json__set } from '../auth0__token__json__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('@ctx-core/jwt').JwtToken}JwtToken */
export const [
	auth0__token__,
	auth0__token_,
] = be_computed_pair_(ctx=>{
	const auth0__token_ =
		computed_(auth0__in__token__(ctx),
			auth0__in__token=>
				auth0__in__token?.error
				? null
				: auth0__in__token)
	auth0__token__json__(ctx).subscribe($=>{
		if ($ == null) {
			auth0__token__clear(ctx)
			return
		}
		if (has_dom) {
			localStorage__sync('auth0__token__json', $)
			if ($) {
				queueMicrotask(()=>
					auth0__token__validate__schedule(ctx))
			}
		}
	})
	if (has_dom) {
		window.addEventListener('storage', $=>
			storage__auth0__token__json__set(ctx, $))
	}
	return auth0__token_
})
export {
	auth0__token__ as auth0_token__,
	auth0__token__ as auth0_token$_,
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
