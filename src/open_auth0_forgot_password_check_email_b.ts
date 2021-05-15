import { _b, B } from '@ctx-core/object'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
export const open_auth0_forgot_password_check_email_b:open_auth0_forgot_password_check_email_b_T = _b('open_auth0_forgot_password_check_email', (
	ctx:open_auth0_forgot_password_check_email_ctx_I
)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_forgot_password_check_email as open_auth0_forgot_password_check_email_T
	function open_auth0_forgot_password_check_email() {
		auth0_opened.set('forgot_password_check_email')
	}
})
export interface open_auth0_forgot_password_check_email_ctx_I extends auth0_opened_ctx_I {
	open_auth0_forgot_password_check_email?:open_auth0_forgot_password_check_email_T
}
export type open_auth0_forgot_password_check_email_T = ()=>void
export interface open_auth0_forgot_password_check_email_b_T extends B<open_auth0_forgot_password_check_email_T> {}
