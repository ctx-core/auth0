import { be_ } from '@ctx-core/object'
import { set_auth0_token_b } from './set_auth0_token_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'logout_auth0_token'
export const logout_auth0_token_b = be_<auth0_Ctx, typeof key>(key, ctx=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return logout_auth0_token as logout_auth0_token_T
	function logout_auth0_token() {
		set_auth0_token(null)
	}
})
export type logout_auth0_token_T = ()=>void
