import { be_atom_triple_, decorate_neql_atom_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
/** @typedef {import('./index.d.ts').auth0__userinfo_token_T} */
export const [
	auth0__userinfo_token$_,
	auth0__userinfo_token_,
	auth0__userinfo_token__set,
] = /** @type {be_atom_triple_T<auth0__userinfo_token_T>} */be_atom_triple_(()=>undefined)
	.config({ id: 'auth0__userinfo_token' })
	.oninit((ctx, auth0__userinfo_token$)=>
		decorate_neql_atom_(auth0__userinfo_token$))
export {
	auth0__userinfo_token$_ as auth0__userinfo_token__,
	auth0__userinfo_token$_ as auth0_userinfo_auth0_token__,
	auth0__userinfo_token$_ as auth0_userinfo_auth0_token$_,
}
