import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened/index.js'
export const [
	auth0__token__error$_,
	auth0__token__error_,
	auth0__token__error__set,
] = be_atom_triple_('auth0__token__error', ctx=>{
	const auth0__token__error$ = atom_(null)
	let _auth0__opened
	auth0__opened$_(ctx).subscribe(auth0__opened=>{
		if (_auth0__opened !== auth0__opened) {
			_auth0__opened = auth0__opened
			auth0__token__error$.$ = null
		}
	})
	return auth0__token__error$
})
export {
	auth0__token__error$_ as auth0__token__error__,
	auth0__token__error$_ as auth0_token_error__,
	auth0__token__error$_ as auth0_token_error$_,
}
