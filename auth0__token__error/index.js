/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
import { be_sig_triple_, sig_ } from 'ctx-core/rmemo'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__token__error$_,
	auth0__token__error_,
	auth0__token__error__set,
] = /** @type {be_sig_triple_T<auth0__token__error_T>} */be_sig_triple_(
	be_(ctx=>{
		let _auth0__opened
		const auth0__token__error$ = sig_(null, auth0__token__error$=>{
			if (_auth0__opened !== auth0__opened_(ctx)) {
				_auth0__opened = auth0__opened_(ctx)
				auth0__token__error$._ = null
			}
		})
		return auth0__token__error$
	}, { id: 'auth0__token__error' }))
export {
	auth0__token__error$_ as auth0__token__error__,
	auth0__token__error$_ as auth0_token_error__,
	auth0__token__error$_ as auth0_token_error$_,
}
