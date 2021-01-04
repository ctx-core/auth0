import { _eql } from '@ctx-core/function'
import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_b } from './auth0_token_b'
export const is_auth0_loggedout_b:is_auth0_loggedout_b_type = _b('is_auth0_loggedout', ctx=>
	derived(
		auth0_token_b(ctx), _eql(false)
	) as is_auth0_loggedout_type
)
export type $is_auth0_loggedout_type = boolean
export interface is_auth0_loggedout_type extends Readable<$is_auth0_loggedout_type> {}
export interface is_auth0_loggedout_b_type extends B<is_auth0_loggedout_type> {}
export {
	is_auth0_loggedout_b as b__is__loggedout__auth0,
}
