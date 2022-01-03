import { be_ } from '@ctx-core/object'
import { auth0_token_error$_b } from './auth0_token_error$_b.js'
import { logout_auth0_token_b } from './logout_auth0_token_b.js'
const key = 'logout_auth0_token_error'
/** @type {import('./logout_auth0_token_error_b.d.ts').logout_auth0_token_error_b} */
export const logout_auth0_token_error_b = be_(key, (ctx)=>{
	const auth0_token_error$ = auth0_token_error$_b(ctx)
	const logout_auth0_token = logout_auth0_token_b(ctx)
	return logout_auth0_token_error
	function logout_auth0_token_error(error) {
		auth0_token_error$.$ = error
		if (error) {
			logout_auth0_token()
		}
	}
})
