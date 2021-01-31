import { _b, B } from '@ctx-core/object'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b'
export const clear_auth0_token_error_b:clear_auth0_token_error_b_type = _b('clear_auth0_token_error', (ctx)=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return clear_auth0_token_error as clear_auth0_token_error_type
	function clear_auth0_token_error() {
		logout_auth0_token_error(null)
	}
})
export type clear_auth0_token_error_type = ()=>void
export interface clear_auth0_token_error_b_type extends B<clear_auth0_token_error_type> {}
