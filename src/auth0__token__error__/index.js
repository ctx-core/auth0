import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	auth0__token__error__,
	auth0__token__error_,
	auth0__token__error__set,
] = be_atom_triple_(ctx=>{
	const auth0__token__error_ = atom_(null)
	let auth0__opened
	auth0__opened__(ctx).subscribe($=>{
		if (auth0__opened !== $) {
			auth0__opened = $
			auth0__token__error_.$ = null
		}
	})
	return auth0__token__error_
})
export {
	auth0__token__error__ as auth0_token_error__,
	auth0__token__error__ as auth0_token_error$_,
}
