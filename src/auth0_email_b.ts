import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import type { Token } from '@ctx-core/jwt'
import { auth0_userinfo_b, auth0_userinfo_ctx_I } from './auth0_userinfo_b'
export const auth0_email_b:auth0_email_b_T = _b('auth0_email', (
	ctx:auth0_email_ctx_I
)=>
	derived(auth0_userinfo_b(ctx), $auth0_userinfo=>
		($auth0_userinfo == false)
		? false
		: $auth0_userinfo && ($auth0_userinfo as Token).email
	) as auth0_email_T)
export interface auth0_email_ctx_I extends auth0_userinfo_ctx_I {
	auth0_email?:auth0_email_T
}
export type $auth0_email_T = Token|false
export interface auth0_email_T extends Readable<$auth0_email_T> {}
export interface auth0_email_b_T extends B<auth0_email_T> {}
export {
	auth0_email_b as b__email__auth0,
	auth0_email_b as b__email,
}
