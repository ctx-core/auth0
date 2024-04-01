/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_, id_be_ } from 'ctx-core/be'
import { be_sig_triple_, id_be_sig_triple_, memo_, sig_ } from 'ctx-core/rmemo'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__token__error$_,
	auth0__token__error_,
	auth0__token__error__set,
] = /** @type {be_sig_triple_T<auth0__token__error_T>} */
	id_be_sig_triple_(
		'auth0__token__error',
		()=>null,
		[
			(
				ctx,
				auth0__token__error$,
				prev_auth0__opened
			)=>{
				if (prev_auth0__opened !== auth0__opened_(ctx)) {
					auth0__token__error$._ = null
				}
				return auth0__opened_(ctx)
			}
		])
be_sig_triple_(
	id_be_(
		'auth0__token__error',
		ctx=>{
			let _auth0__opened
			const auth0__token__error$ =
				sig_(
					null
				).add(auth0__token__error$=>
					memo_(()=>{
						if (_auth0__opened !== auth0__opened_(ctx)) {
							_auth0__opened = auth0__opened_(ctx)
							auth0__token__error$._ = null
						}
					}))
			return auth0__token__error$
		}))
export {
	auth0__token__error$_ as auth0__token__error__,
	auth0__token__error$_ as auth0_token_error__,
	auth0__token__error$_ as auth0_token_error$_,
}
