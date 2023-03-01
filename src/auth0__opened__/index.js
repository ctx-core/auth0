import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('index.d.ts').auth0__opened__} */
export const auth0__opened__ = be_(
	'auth0__opened__',
	()=>
		atom_(null))
export {
	auth0__opened__ as auth0_opened__,
	auth0__opened__ as auth0_opened$_,
}
/**
 * @param {Ctx}ctx
 * @returns {import('./index.d.ts').auth0__opened_T}
 * @private
 */
export function auth0__opened_(ctx) {
  return auth0__opened__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {string}auth0__opened
 */
export function auth0__opened__set(ctx, auth0__opened) {
  auth0__opened__(ctx).$ = auth0__opened
}
/**
 * @param {Ctx}ctx
 */
export function auth0__change_password__open(ctx) {
	auth0__opened__(ctx).$ = 'change_password'
}
export {
	auth0__change_password__open as open_auth0_change_password,
}
