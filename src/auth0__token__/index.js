import { has_dom } from '@ctx-core/dom'
import { bad_credentials_error_ } from '@ctx-core/error'
import { jwt__expiration__is_valid_ } from '@ctx-core/jwt'
import { localStorage__sync } from '@ctx-core/local-storage'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__in__token__ } from '../auth0__in__token__/index.js'
import { auth0__token__clear } from '../auth0__token__clear/index.js'
import { auth0__token__error__logout } from '../auth0__token__error__logout/index.js'
import { auth0__token__json__, auth0__token__json__set } from '../auth0__token__json__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('@ctx-core/jwt').JwtToken}JwtToken */
/** @type {typeof import('./index.d.ts').auth0__token__} */
export const auth0__token__ = be_('auth0__token__', ctx=>{
	const auth0__token_ = computed_(auth0__in__token__(ctx), $=>
		$?.error ? null : $)
	auth0__token__json__(ctx).subscribe($=>{
		if ($ == null) {
			auth0__token__clear(ctx)
			return
		}
		if (has_dom) {
			localStorage__sync('auth0__token__json', $)
			if ($) queueMicrotask(()=>auth0__token__validate__schedule_(ctx))
		}
	})
	if (has_dom) {
		window.addEventListener('storage', $=>
			storage__auth0__token__json__set(ctx, $))
	}
	return auth0__token_
	function auth0__token__validate__schedule_(ctx) {
		const auth0__token = auth0__token__(ctx).$
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
					bad_credentials_error_({
						data: { id_token },
						error_message: 'Session Expired'
					}))
			}
		}
	}
})
export {
	auth0__token__ as auth0_token__,
	auth0__token__ as auth0_token$_,
}
/**
 * @param {Ctx}ctx
 * @returns {JwtToken}
 * @private
 */
export function auth0__token_(ctx) {
	return auth0__token__(ctx).$
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
