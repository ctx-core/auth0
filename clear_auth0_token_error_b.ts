import { _b } from '@ctx-core/object'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b'
export const clear_auth0_token_error_b = _b(
	'clear_auth0_token_error', (ctx)=>{
		const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
		return function clear_auth0_token_error() {
			logout_auth0_token_error(null)
		}
	})
