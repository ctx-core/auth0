import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__token__error__ } from '../auth0__token__error__/index.js'
const localStorage_key = 'auth0__token__json'
/** @type {typeof import('./index.d.ts').auth0__token__json__} */
export const auth0__token__json__ = be_('auth0__token__json__', ctx=>{
	const auth0__token__json_ =
		atom_(
			has_dom && localStorage.getItem(localStorage_key)
			|| null)
	auth0__token__error__(ctx).subscribe($error=>{
		if ($error) auth0__token__json_.$ = 'null'
	})
	if (has_dom) {
		auth0__token__json_.listen($=>
			localStorage.setItem(localStorage_key, $))
	}
	return auth0__token__json_
})
export {
	auth0__token__json__ as auth0_token_json__,
	auth0__token__json__ as auth0_token_json$_,
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @returns {string|null|undefined}
 * @private
 */
export function auth0__token__json_(ctx) {
	return auth0__token__json__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {string}auth0__token__json
 */
export function auth0__token__json__set(ctx, auth0__token__json) {
	auth0__token__json__(ctx).$ = auth0__token__json
}
