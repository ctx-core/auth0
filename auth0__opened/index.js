/// <reference types="ctx-core" />
import { be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	auth0__opened$_,
	auth0__opened_,
	auth0__opened__set,
] = be_sig_triple_(
	()=>null,
	{ id: 'auth0__opened' })
export {
	auth0__opened$_ as auth0__opened__,
	auth0__opened$_ as auth0_opened__,
	auth0__opened$_ as auth0_opened$_,
}
/**
 * @param {ctx_T}ctx
 */
export function auth0__change_password__open(ctx) {
	auth0__opened__set(ctx, 'change_password')
}
export {
	auth0__change_password__open as open_auth0_change_password,
}
