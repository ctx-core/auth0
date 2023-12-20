import { has_dom } from '@ctx-core/dom'
import { be_ } from 'ctx-core/be'
import { be_sig_triple_, sig_ } from 'ctx-core/rmemo'
import { auth0__token__error_ } from '../auth0__token__error/index.js'
const localStorage_key = 'auth0__token__json'
export const [
	auth0__token__json$_,
	auth0__token__json_,
	auth0__token__json__set,
] = /** @type {be_sig_triple_T<string|nullish>} */be_sig_triple_(be_(ctx=>{
	const auth0__token__json$ = sig_(
		has_dom
		&& localStorage.getItem(localStorage_key) || null,
		()=>{
			if (auth0__token__error_(ctx)) {
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
