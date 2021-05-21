import { _eq } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
const key = 'auth0_forgot_password_check_email_opened'
export interface auth0_forgot_password_check_email_opened_ctx_I
	extends auth0_opened_ctx_I {
	auth0_forgot_password_check_email_opened?:auth0_forgot_password_check_email_opened_T
}
export const auth0_forgot_password_check_email_opened_b = _b<auth0_forgot_password_check_email_opened_ctx_I, typeof key>(key, (
	ctx
)=>
	derived(auth0_opened_b(ctx),
		_eq('forgot_password_check_email')
	) as auth0_forgot_password_check_email_opened_T)
export type $auth0_forgot_password_check_email_opened_T = boolean
export interface auth0_forgot_password_check_email_opened_T extends Readable<$auth0_forgot_password_check_email_opened_T> {}
export {
	auth0_forgot_password_check_email_opened_b as b__opened__forgot_password_check_email,
}
