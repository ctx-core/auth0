import { _b, B } from '@ctx-core/object'
import { $auth0_token_error_type, auth0_token_error_b } from './auth0_token_error_b'
import { logout_auth0_token_b } from './logout_auth0_token_b'
export const logout_auth0_token_error_b:logout_auth0_token_error_b_type = _b('logout_auth0_token_error', (ctx)=>{
	const auth0_token_error = auth0_token_error_b(ctx)
	const logout_auth0_token = logout_auth0_token_b(ctx)
	return logout_auth0_token_error as logout_auth0_token_error_type
	function logout_auth0_token_error(error:$auth0_token_error_type) {
		auth0_token_error.set(error as $auth0_token_error_type)
		if (error) {
			logout_auth0_token()
		}
	}
})
export type logout_auth0_token_error_type = (error:$auth0_token_error_type|null)=>void
export interface logout_auth0_token_error_b_type extends B<logout_auth0_token_error_type> {}
