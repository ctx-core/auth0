import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	auth0__opened__,
	auth0__opened_,
	auth0__opened__set,
] = be_atom_triple_(()=>
	atom_(null))
export {
	auth0__opened__ as auth0_opened__,
	auth0__opened__ as auth0_opened$_,
}
/**
 * @param {Ctx}ctx
 */
export function auth0__change_password__open(ctx) {
	auth0__opened__set(ctx, 'change_password')
}
export {
	auth0__change_password__open as open_auth0_change_password,
}
