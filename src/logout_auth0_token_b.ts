import { _b, B } from '@ctx-core/object'
import { set_auth0_token_b, set_auth0_token_ctx_I } from './set_auth0_token_b'
export const logout_auth0_token_b:logout_auth0_token_b_T = _b('logout_auth0_token', (
	ctx:logout_auth0_token_ctx_I
)=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return logout_auth0_token as logout_auth0_token_T
	function logout_auth0_token() {
		set_auth0_token(null)
	}
})
export interface logout_auth0_token_ctx_I extends set_auth0_token_ctx_I {
	logout_auth0_token?:logout_auth0_token_T
}
export type logout_auth0_token_T = ()=>void
export interface logout_auth0_token_b_T extends B<logout_auth0_token_T> {}
