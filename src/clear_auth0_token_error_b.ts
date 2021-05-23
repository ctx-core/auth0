import { _b } from '@ctx-core/object'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'clear_auth0_token_error'
export const clear_auth0_token_error_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return clear_auth0_token_error as clear_auth0_token_error_T
	function clear_auth0_token_error() {
		logout_auth0_token_error(null)
	}
})
export type clear_auth0_token_error_T = ()=>void
