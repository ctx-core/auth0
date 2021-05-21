import { _b } from '@ctx-core/object'
import type { falsy } from '@ctx-core/function'
import { has_dom } from '@ctx-core/dom'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'auth0_token_json'
export interface auth0_token_json_Ctx {
	auth0_token_json?:auth0_token_json_T
}
export const auth0_token_json_b = _b<auth0_token_json_Ctx, typeof key>(key, _ctx=>{
	const auth_token_json = writable$<string|falsy>(
		(
			has_dom
			&& localStorage.getItem(key)) || false
	)
	return auth_token_json as auth0_token_json_T
})
export type $auth0_token_json_T = string|falsy
export interface auth0_token_json_T extends Writable$<$auth0_token_json_T> {}
export {
	auth0_token_json_b as b__json__token__auth0,
}
