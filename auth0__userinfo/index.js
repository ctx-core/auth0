import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	auth0__userinfo$_,
	auth0__userinfo_,
	auth0__userinfo__set,
] = be_atom_triple_('auth0__userinfo', ()=>
	atom_())
export {
	auth0__userinfo$_ as auth0__userinfo__,
	auth0__userinfo$_ as auth0_userinfo__,
	auth0__userinfo$_ as auth0_userinfo$_,
}
