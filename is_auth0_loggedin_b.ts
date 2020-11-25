import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { auth0_token_b } from './auth0_token_b'
export const is_auth0_loggedin_b = _b('is_auth0_loggedin', ctx=>
	derived(
		auth0_token_b(ctx),
		auth0_token=>!!auth0_token
	))
export {
	is_auth0_loggedin_b as b__is__loggedin__auth0,
}
