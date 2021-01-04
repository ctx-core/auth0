import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_b } from './auth0_token_b'
export const is_auth0_loggedin_b:is_auth0_loggedin_b_type = _b('is_auth0_loggedin', ctx=>
	derived(
		auth0_token_b(ctx),
		auth0_token=>!!auth0_token
	) as is_auth0_loggedin_type
)
export type $is_auth0_loggedin_type = boolean
export interface is_auth0_loggedin_type extends Readable<$is_auth0_loggedin_type> {}
export interface is_auth0_loggedin_b_type extends B<is_auth0_loggedin_type> {}
export {
	is_auth0_loggedin_b as b__is__loggedin__auth0,
}
