import { _b } from '@ctx-core/object'
import type { falsy } from '@ctx-core/function'
import { has__dom } from '@ctx-core/dom'
import { Writable, writable } from '@ctx-core/store'
export const auth0_token_json_b = _b<auth0_token_json_type>('auth0_token_json', ()=>{
	const auth_token_json = writable<string|falsy>(
		(
			has__dom
			&& localStorage.getItem('auth0_token_json')) || false
	) as auth0_token_json_type
	return auth_token_json as auth0_token_json_type
})
export type set_auth0_token_type = (auth0_token:any)=>void
export type clear_auth0_token_type = (value?:falsy)=>void
export type logout_auth0_token_type = ()=>void
export type $auth0_token_json_type = string|falsy
export interface auth0_token_json_type extends Writable<$auth0_token_json_type> {
}
export {
	auth0_token_json_b as b__json__token__auth0,
	auth0_token_json_type as type__json__token__auth0,
}
