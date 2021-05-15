import { _b, B } from '@ctx-core/object'
import type { falsy } from '@ctx-core/function'
import { has_dom } from '@ctx-core/dom'
import { Writable$, writable$ } from '@ctx-core/store'
export const auth0_token_json_b:auth0_token_json_b_T = _b('auth0_token_json', (
	_ctx:auth0_token_json_ctx_I
)=>{
	const auth_token_json = writable$<string|falsy>(
		(
			has_dom
			&& localStorage.getItem('auth0_token_json')) || false
	)
	return auth_token_json as auth0_token_json_T
})
export interface auth0_token_json_ctx_I {
	auth0_token_json?:auth0_token_json_T
}
export type $auth0_token_json_T = string|falsy
export interface auth0_token_json_T extends Writable$<$auth0_token_json_T> {}
export interface auth0_token_json_b_T extends B<auth0_token_json_T> {}
export {
	auth0_token_json_b as b__json__token__auth0,
}
