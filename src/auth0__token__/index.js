import { has_dom } from '@ctx-core/dom'
import { jwt_token_exp_ } from '@ctx-core/jwt'
import { localStorage__sync } from '@ctx-core/local-storage'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__token__json__ } from '../auth0__token__json__/index.js'
import { auth0__token__clear } from '../auth0__token__clear/index.js'
import { auth0__in__token__ } from '../auth0__in__token__/index.js'
import { auth0__token__error__logout } from '../auth0__token__error__logout/index.js'
import { auth0__token__validate } from '../auth0__token__validate/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('@ctx-core/jwt').JwtToken}JwtToken */
/** @type {typeof import('./index.d.ts').auth0__token__} */
export const auth0__token__ = be_('auth0__token__', ctx=>{
	const auth0_token_ = computed_(auth0__in__token__(ctx), $=>
		$?.error ? null : $)
	auth0__token__json__(ctx).subscribe($=>{
		if ($ == null) {
			auth0__token__clear(ctx)
			return
		}
		if (has_dom) {
			localStorage__sync('auth0__token__json', $)
			if ($) queueMicrotask(()=>schedule_validate_auth0_token_current(ctx))
		}
	})
	if (has_dom) {
		window.addEventListener('storage', $=>
			auth0__token__json__set(ctx, $))
	}
	return auth0_token_
	function schedule_validate_auth0_token_current(ctx) {
		const auth0__token = auth0__token__(ctx).$
		const id_token =
			auth0__token === null
			|| auth0__token === void 0
			? void 0
			: auth0__token.id_token
		if (!id_token) return
		const jwt_token_exp_millis = jwt_token_exp_(id_token) * 1000
		const now = Date.now()
		const validate_millis = now - jwt_token_exp_millis
		setTimeout(async ()=>{
			try {
				auth0__token__validate(auth0__token)
			} catch (error) {
				if (error.type === 'bad_credentials') {
					console.error(error)
					auth0__token__error__logout(ctx, error)
					return
				}
				throw error
			}
		}, validate_millis)
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
function auth0__token__json__set(ctx, event) {
	if (event.key === 'auth0__token__json') {
		auth0__token__json__(ctx).$ = event.newValue
	}
}
