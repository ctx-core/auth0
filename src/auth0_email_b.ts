import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import type { Token } from '@ctx-core/jwt'
import { auth0_userinfo_b, auth0_userinfo_Ctx } from './auth0_userinfo_b'
const key = 'auth0_email'
export interface auth0_email_Ctx extends auth0_userinfo_Ctx {
	auth0_email?:auth0_email_T
}
export const auth0_email_b = _b<auth0_email_Ctx, typeof key>(key, ctx=>
	derived(auth0_userinfo_b(ctx), $auth0_userinfo=>
		($auth0_userinfo == false)
		? false
		: $auth0_userinfo && ($auth0_userinfo as Token).email
	) as auth0_email_T)
export type $auth0_email_T = Token|false
export interface auth0_email_T extends Readable<$auth0_email_T> {}
export {
	auth0_email_b as b__email__auth0,
	auth0_email_b as b__email,
}
