import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
import type { $auth0_token_T } from './auth0_token_b'
export const auth0_userinfo_auth0_token_b:auth0_userinfo_auth0_token_b_T = _b('auth0_userinfo_auth0_token', (
	_ctx:auth0_userinfo_auth0_token_ctx_I
)=>
	writable<$auth0_userinfo_auth0_token_T>(null) as auth0_userinfo_auth0_token_T)
export interface auth0_userinfo_auth0_token_ctx_I {
	auth0_userinfo_auth0_token?:auth0_userinfo_auth0_token_T
}
export type $auth0_userinfo_auth0_token_T = $auth0_token_T|null
export interface auth0_userinfo_auth0_token_T extends Writable<$auth0_userinfo_auth0_token_T> {}
export interface auth0_userinfo_auth0_token_b_T extends B<auth0_userinfo_auth0_token_T> {}
export {
	auth0_userinfo_auth0_token_b as b__auth0_userinfo_auth0_token,
}
