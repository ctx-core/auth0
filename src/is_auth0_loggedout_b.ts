import { _eql } from '@ctx-core/function'
import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_b, auth0_token_ctx_I } from './auth0_token_b'
export const is_auth0_loggedout_b:is_auth0_loggedout_b_T = _b('is_auth0_loggedout', (
	ctx:is_auth0_loggedout_ctx_I
)=>
	derived(
		auth0_token_b(ctx), _eql(false)
	) as is_auth0_loggedout_T)
export interface is_auth0_loggedout_ctx_I extends auth0_token_ctx_I {
	is_auth0_loggedout?:is_auth0_loggedout_T
}
export type $is_auth0_loggedout_T = boolean
export interface is_auth0_loggedout_T extends Readable<$is_auth0_loggedout_T> {}
export interface is_auth0_loggedout_b_T extends B<is_auth0_loggedout_T> {}
export {
	is_auth0_loggedout_b as b__is__loggedout__auth0,
}
