import { _b, B } from '@ctx-core/object'
import { _eq } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b } from './auth0_opened_b'
export const auth0_forgot_password_check_email_opened_b:auth0_forgot_password_check_email_opened_b_type = _b('auth0_forgot_password_check_email_opened', ctx=>
	derived(auth0_opened_b(ctx),
		_eq('forgot_password_check_email')
	) as auth0_forgot_password_check_email_opened_type
)
export type $auth0_forgot_password_check_email_opened_type = boolean
export interface auth0_forgot_password_check_email_opened_type extends Readable<$auth0_forgot_password_check_email_opened_type> {}
export interface auth0_forgot_password_check_email_opened_b_type extends B<auth0_forgot_password_check_email_opened_type> {}
export {
	auth0_forgot_password_check_email_opened_b as b__opened__forgot_password_check_email,
}
