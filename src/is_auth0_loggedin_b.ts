import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_b, auth0_token_ctx_I } from './auth0_token_b'
const key = 'is_auth0_loggedin'
export interface is_auth0_loggedin_ctx_I
	extends auth0_token_ctx_I {
	is_auth0_loggedin?:is_auth0_loggedin_T
}
export const is_auth0_loggedin_b = _b<is_auth0_loggedin_ctx_I, typeof key>(key, ctx=>
	derived(
		auth0_token_b(ctx),
		auth0_token=>!!auth0_token
	) as is_auth0_loggedin_T)
export type $is_auth0_loggedin_T = boolean
export interface is_auth0_loggedin_T extends Readable<$is_auth0_loggedin_T> {}
export {
	is_auth0_loggedin_b as b__is__loggedin__auth0,
}
