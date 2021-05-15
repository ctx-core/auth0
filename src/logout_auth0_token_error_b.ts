import { _b, B } from '@ctx-core/object'
import { $auth0_token_error_T, auth0_token_error_b, auth0_token_error_ctx_I } from './auth0_token_error_b'
import { logout_auth0_token_b, logout_auth0_token_ctx_I } from './logout_auth0_token_b'
export const logout_auth0_token_error_b:logout_auth0_token_error_b_T = _b('logout_auth0_token_error', (
	ctx:logout_auth0_token_error_ctx_I
)=>{
	const auth0_token_error = auth0_token_error_b(ctx)
	const logout_auth0_token = logout_auth0_token_b(ctx)
	return logout_auth0_token_error as logout_auth0_token_error_T
	function logout_auth0_token_error(error:$auth0_token_error_T) {
		auth0_token_error.set(error as $auth0_token_error_T)
		if (error) {
			logout_auth0_token()
		}
	}
})
export interface logout_auth0_token_error_ctx_I
	extends auth0_token_error_ctx_I, logout_auth0_token_ctx_I {
	logout_auth0_token_error?:logout_auth0_token_error_T
}
export type logout_auth0_token_error_T = (error:$auth0_token_error_T|null)=>void
export interface logout_auth0_token_error_b_T extends B<logout_auth0_token_error_T> {}
