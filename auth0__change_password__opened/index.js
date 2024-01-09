/// <reference types="ctx-core" />
import { be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__opened_, auth0__opened__set } from '../auth0__opened/index.js'
export const [
	auth0__change_password__opened$_,
	auth0__change_password__opened_,
] = be_memo_pair_(
	ctx=>auth0__opened_(ctx) === 'change_password',
	{ id: 'auth0__change_password__opened' })
export {
	auth0__change_password__opened$_ as auth0__change_password__opened__,
	auth0__change_password__opened$_ as auth0_change_password_opened__,
	auth0__change_password__opened$_ as auth0_change_password_opened$_,
}
/**
 * @param {Ctx}ctx
 * @param {boolean}auth0__change_password__opened
 */
export function auth0__change_password__opened__set(
	ctx,
	auth0__change_password__opened
) {
	if (auth0__change_password__opened) {
		auth0__opened__set(ctx, 'change_password')
	} else if (auth0__opened_(ctx) === 'change_password') {
		auth0__opened__set(ctx, null)
	}
}
