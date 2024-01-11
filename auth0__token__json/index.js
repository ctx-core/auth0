import { has_dom } from '@ctx-core/dom'
import { be_ } from 'ctx-core/be'
import { be_sig_triple_, memo_, sig_ } from 'ctx-core/rmemo'
import { auth0__token__error_ } from '../auth0__token__error/index.js'
const localStorage_key = 'auth0__token__json'
export const [
	auth0__token__json$_,
	auth0__token__json_,
	auth0__token__json__set,
] = /** @type {be_sig_triple_T<string|nullish>} */
	be_sig_triple_(
		()=>
			has_dom && localStorage.getItem(localStorage_key)
			|| null,
		{ id: 'auth0__token__json' }
	).add(ctx=>
		memo_(()=>{
			if (auth0__token__error_(ctx)) {
				queueMicrotask(()=>
					auth0__token__json__set(ctx, 'null'))
			}
		})
	).add((ctx, auth0__token__json$)=>
		memo_(()=>{
			if (has_dom) {
				localStorage.setItem(localStorage_key, auth0__token__json$())
			}
		}))
export {
	auth0__token__json$_ as auth0__token__json__,
	auth0__token__json$_ as auth0_token_json__,
	auth0__token__json$_ as auth0_token_json$_,
}
