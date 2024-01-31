import { is_browser_ } from 'ctx-core/env'
import { be_sig_triple_, memo_ } from 'ctx-core/rmemo'
import { auth0__token__error_ } from '../auth0__token__error/index.js'
const localStorage_key = 'auth0__token__json'
export const [
	auth0__token__json$_,
	auth0__token__json_,
	auth0__token__json__set,
] = /** @type {be_sig_triple_T<string|nullish>} */
	be_sig_triple_(
		()=>
			is_browser_() && localStorage.getItem(localStorage_key)
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
			if (is_browser_()) {
				localStorage.setItem(localStorage_key, auth0__token__json$())
			}
		}))
export {
	auth0__token__json$_ as auth0__token__json__,
	auth0__token__json$_ as auth0_token_json__,
	auth0__token__json$_ as auth0_token_json$_,
}
