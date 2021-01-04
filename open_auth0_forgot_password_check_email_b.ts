import { _b, B } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
export const open_auth0_forgot_password_check_email_b:open_auth0_forgot_password_check_email_b_type = _b('open_auth0_forgot_password_check_email', (ctx)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_forgot_password_check_email as open_auth0_forgot_password_check_email_type
	function open_auth0_forgot_password_check_email() {
		auth0_opened.set('forgot_password_check_email')
	}
})
export type open_auth0_forgot_password_check_email_type = ()=>void
export interface open_auth0_forgot_password_check_email_b_type extends B<open_auth0_forgot_password_check_email_type> {}
