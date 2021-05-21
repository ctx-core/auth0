import { _b, B } from '@ctx-core/object'
import {
	logout_auth0_token_error_b, logout_auth0_token_error_ctx_I,
} from './logout_auth0_token_error_b'
const key = 'clear_auth0_token_error'
export interface clear_auth0_token_error_ctx_I
	extends logout_auth0_token_error_ctx_I {
	clear_auth0_token_error?:clear_auth0_token_error_T
}
export const clear_auth0_token_error_b = _b<clear_auth0_token_error_ctx_I, typeof key>(key, ctx=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return clear_auth0_token_error as clear_auth0_token_error_T
	function clear_auth0_token_error() {
		logout_auth0_token_error(null)
	}
})
export type clear_auth0_token_error_T = ()=>void
export interface clear_auth0_token_error_b_T extends B<clear_auth0_token_error_T> {}
