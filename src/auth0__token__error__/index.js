import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('index.d.ts').auth0__token__error__} */
export const auth0__token__error__ = be_('auth0__token__error__', ctx=>{
	const auth0__token__error_ = atom_(null)
	let auth0__opened
	auth0__opened__(ctx).subscribe($=>{
		if (auth0__opened !== $) {
			auth0__opened = $
			auth0__token__error_.$ = null
		}
	})
	return auth0__token__error_
})
export {
	auth0__token__error__ as auth0_token_error__,
	auth0__token__error__ as auth0_token_error$_,
}
/**
 * @param {Ctx}ctx
 * @returns {auth0__token__error_T}
 * @private
 */
export function auth0__token__error_(ctx) {
	return auth0__token__error__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {auth0__token__error_T}auth0__token__error
 */
export function auth0__token__error__set(
	ctx,
	auth0__token__error
) {
	auth0__token__error__(ctx).$ = auth0__token__error
}
