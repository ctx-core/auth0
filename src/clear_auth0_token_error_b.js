import { be_ } from '@ctx-core/object'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b.js'
const key = 'clear_auth0_token_error'
/** @type {import('./clear_auth0_token_error_b.d.ts').clear_auth0_token_error_b} */
export const clear_auth0_token_error_b = be_(key, (ctx)=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return clear_auth0_token_error
	function clear_auth0_token_error() {
		logout_auth0_token_error(null)
	}
})
//# sourceMappingURL=clear_auth0_token_error_b.js.map
