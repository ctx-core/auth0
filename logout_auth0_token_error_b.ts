import { _b } from '@ctx-core/object'
import { auth0_token_error_b } from './auth0_token_error_b'
import { logout_auth0_token_b } from './logout_auth0_token_b'
export const logout_auth0_token_error_b = _b(
	'logout_auth0_token_error', (ctx)=>{
		const auth0_token_error = auth0_token_error_b(ctx)
		const logout_auth0_token = logout_auth0_token_b(ctx)
		return function logout_auth0_token_error(error) {
			auth0_token_error.set(error)
			if (error) {
				logout_auth0_token()
			}
		}
	})
