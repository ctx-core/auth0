import { _b } from '@ctx-core/object'
import { $auth0_token_error_T, auth0_token_error_b } from './auth0_token_error_b'
import { logout_auth0_token_b } from './logout_auth0_token_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'logout_auth0_token_error'
export const logout_auth0_token_error_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
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
export type logout_auth0_token_error_T = (error:$auth0_token_error_T|null)=>void
