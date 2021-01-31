import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import type { Token } from '@ctx-core/jwt'
import { auth0_userinfo_b } from './auth0_userinfo_b'
export const auth0_email_b:auth0_email_b_type = _b('auth0_email', ctx=>
	derived(auth0_userinfo_b(ctx), $auth0_userinfo=>
		($auth0_userinfo == false)
		? false
		: $auth0_userinfo && ($auth0_userinfo as Token).email
	) as auth0_email_type
)
export type $auth0_email_type = Token|false
export interface auth0_email_type extends Readable<$auth0_email_type> {}
export interface auth0_email_b_type extends B<auth0_email_type> {}
export {
	auth0_email_b as b__email__auth0,
	auth0_email_b as b__email,
}
