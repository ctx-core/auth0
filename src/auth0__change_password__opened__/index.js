import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').auth0__change_password__opened__} */
export const auth0__change_password__opened__ = be_(
	'auth0__change_password__opened__',
	ctx=>
		computed_(auth0__opened__(ctx),
			$=>$ === 'change_password'))
export {
	auth0__change_password__opened__ as auth0_change_password_opened__,
	auth0__change_password__opened__ as auth0_change_password_opened$_,
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @returns {boolean}
 * @private
 */
export function auth0__change_password__opened_(ctx) {
  return auth0__change_password__opened__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {boolean}auth0__change_password__opened
 */
export function auth0__change_password__opened__set(ctx, auth0__change_password__opened) {
	auth0__change_password__opened__(ctx).$ = auth0__change_password__opened
}
