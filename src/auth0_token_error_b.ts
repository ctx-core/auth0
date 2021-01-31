import { _b, B } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const auth0_token_error_b:auth0_token_error_b_type = _b('auth0_token_error', _ctx=>{
	const auth0_token_error = writable(null)
	return auth0_token_error as auth0_token_error_type
})
export interface $auth0_token_error_I {
	message?:string
	error_message?:string
	error_description?:string
	error?:any
	email?:string
	password?:string
}
export type $auth0_token_error_type = $auth0_token_error_I|null
export interface auth0_token_error_type extends Writable<$auth0_token_error_type> {}
export interface auth0_token_error_b_type extends B<auth0_token_error_type> {}
export {
	auth0_token_error_b as b__error__token__auth0,
	auth0_token_error_type as type__error__token__auth0
}
