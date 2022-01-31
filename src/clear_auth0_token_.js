import { be_ } from '@ctx-core/object'
import { set_auth0_token } from './set_auth0_token.js'
const key = 'clear_auth0_token'
/** @type {import('./clear_auth0_token_.d.ts').clear_auth0_token_} */
export const clear_auth0_token_ = be_(key, ctx=>{
	return clear_auth0_token
	function clear_auth0_token(value = null) {
		set_auth0_token(ctx, value)
	}
})
