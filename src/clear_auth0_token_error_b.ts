import { B, be_ } from '@ctx-core/object'
import type { auth0_Ctx } from './auth0_Ctx.js'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b.js'
const key = 'clear_auth0_token_error'
export const clear_auth0_token_error_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return clear_auth0_token_error as clear_auth0_token_error_T
	function clear_auth0_token_error() {
		logout_auth0_token_error(null)
	}
})
export type clear_auth0_token_error_T = ()=>void
