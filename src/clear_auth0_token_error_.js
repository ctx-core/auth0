import { be_ } from '@ctx-core/object'
import { logout_auth0_token_error } from './logout_auth0_token_error.js'
const key = 'clear_auth0_token_error'
/** @type {import('./clear_auth0_token_error_.d.ts').clear_auth0_token_error_} */
export const clear_auth0_token_error_ = be_(key, ctx=>{
	return clear_auth0_token_error
	function clear_auth0_token_error() {
		logout_auth0_token_error(ctx, null)
	}
})
