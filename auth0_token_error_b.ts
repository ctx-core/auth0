import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const auth0_token_error_b = _b<auth0_token_error_type>('auth0_token_error', _ctx=>{
	const auth0_token_error = writable(null) as auth0_token_error_type
	return auth0_token_error as auth0_token_error_type
})
export interface $auth0_token_error_type {
	message?:string
	error_message?:string
	error_description?:string
	error?
}
export type $maybe_auth0_token_error_type = maybe_null<$auth0_token_error_type>
export interface auth0_token_error_type extends Writable<$maybe_auth0_token_error_type> {
}
export {
	auth0_token_error_b as b__error__token__auth0,
	auth0_token_error_type as type__error__token__auth0
}
