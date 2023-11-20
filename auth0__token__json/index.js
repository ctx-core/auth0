import { has_dom } from '@ctx-core/dom'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { be_ } from 'ctx-core/all'
import { auth0__token__error$_ } from '../auth0__token__error/index.js'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
const localStorage_key = 'auth0__token__json'
export const [
	auth0__token__json$_,
	auth0__token__json_,
	auth0__token__json__set,
] = /** @type {be_atom_triple_T<string|nullish>} */be_atom_triple_(be_(ctx=>{
	const auth0__token__json$ = atom_(has_dom && localStorage.getItem(localStorage_key) || null)
	auth0__token__error$_(ctx).subscribe(auth0__token__error=>{
		if (auth0__token__error) {
			queueMicrotask(()=>
				auth0__token__json__set(ctx, 'null'))
		}
	})
	if (has_dom) {
		auth0__token__json$.listen(auth0__token__json=>
			localStorage.setItem(localStorage_key, auth0__token__json))
	}
	return auth0__token__json$
}, { id: 'auth0__token__json' }))
export {
	auth0__token__json$_ as auth0__token__json__,
	auth0__token__json$_ as auth0_token_json__,
	auth0__token__json$_ as auth0_token_json$_,
}
