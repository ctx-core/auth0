import { be_atom_triple_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened/index.js'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
/** @typedef {import('./index.d.ts').auth0__token__error_T} */
export const [
	auth0__token__error$_,
	auth0__token__error_,
	auth0__token__error__set,
] = /** @type {be_atom_triple_T<auth0__token__error_T>} */be_atom_triple_(()=>null)
	.config({ id: 'auth0__token__error' })
	.oninit((ctx, auth0__token__error$)=>{
		let _auth0__opened
		auth0__opened$_(ctx).subscribe(auth0__opened=>{
			if (_auth0__opened !== auth0__opened) {
				_auth0__opened = auth0__opened
				auth0__token__error$.$ = null
			}
		})
	})
export {
	auth0__token__error$_ as auth0__token__error__,
	auth0__token__error$_ as auth0_token_error__,
	auth0__token__error$_ as auth0_token_error$_,
}
