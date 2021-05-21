import { _b } from '@ctx-core/object'
import { set_auth0_token_b, set_auth0_token_ctx_I } from './set_auth0_token_b'
const key = 'logout_auth0_token'
export interface logout_auth0_token_ctx_I extends set_auth0_token_ctx_I {
	logout_auth0_token?:logout_auth0_token_T
}
export const logout_auth0_token_b = _b<logout_auth0_token_ctx_I, typeof key>(key, ctx=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return logout_auth0_token as logout_auth0_token_T
	function logout_auth0_token() {
		set_auth0_token(null)
	}
})
export type logout_auth0_token_T = ()=>void
