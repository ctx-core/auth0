import { _b } from '@ctx-core/object'
import { set_auth0_token_b } from './set_auth0_token_b'
export const logout_auth0_token_b = _b(
	'logout_auth0_token', (ctx)=>{
		const set_auth0_token = set_auth0_token_b(ctx)
		return function logout_auth0_token() {
			set_auth0_token(null)
		}
	})
