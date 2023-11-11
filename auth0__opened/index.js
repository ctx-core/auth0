import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T}be_atom_triple_T */
export const [
	auth0__opened$_,
	auth0__opened_,
	auth0__opened__set,
] = /** @type {be_atom_triple_T<string>} */be_atom_triple_('auth0__opened',
	()=>
		atom_(null))
export {
	auth0__opened$_ as auth0__opened__,
	auth0__opened$_ as auth0_opened__,
	auth0__opened$_ as auth0_opened$_,
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
