import { _b, B } from '@ctx-core/object'
import { set_auth0_token_b } from './set_auth0_token_b'
export const logout_auth0_token_b:logout_auth0_token_b_type = _b('logout_auth0_token', (ctx)=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return logout_auth0_token as logout_auth0_token_type
	function logout_auth0_token() {
		set_auth0_token(null)
	}
})
export type logout_auth0_token_type = ()=>void
export interface logout_auth0_token_b_type extends B<logout_auth0_token_type> {}
