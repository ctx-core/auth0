import { be_ } from '@ctx-core/object'
import { set_auth0_token_b } from './set_auth0_token_b.js'
const key = 'logout_auth0_token'
/** @type {import('./logout_auth0_token_b.d.ts').logout_auth0_token_b} */
export const logout_auth0_token_b = be_(key, (ctx)=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return logout_auth0_token
	function logout_auth0_token() {
		set_auth0_token(null)
	}
})
