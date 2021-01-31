import { _b, B } from '@ctx-core/object'
import type { falsy } from '@ctx-core/function'
import { has__dom } from '@ctx-core/dom'
import { Writable, writable } from '@ctx-core/store'
export const auth0_token_json_b:auth0_token_json_b_type = _b('auth0_token_json', ()=>{
	const auth_token_json = writable<string|falsy>(
		(
			has__dom
			&& localStorage.getItem('auth0_token_json')) || false
	)
	return auth_token_json as auth0_token_json_type
})
export type $auth0_token_json_type = string|falsy
export interface auth0_token_json_type extends Writable<$auth0_token_json_type> {}
export interface auth0_token_json_b_type extends B<auth0_token_json_type> {}
export {
	auth0_token_json_b as b__json__token__auth0,
	auth0_token_json_type as type__json__token__auth0,
}
