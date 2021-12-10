import { B, be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'open_auth0_forgot_password_check_email'
export const open_auth0_forgot_password_check_email_b:B<open_auth0_forgot_password_check_email_T> = be_(key, ctx=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return open_auth0_forgot_password_check_email as open_auth0_forgot_password_check_email_T
	function open_auth0_forgot_password_check_email() {
		auth0_opened$.$ = 'forgot_password_check_email'
	}
})
export type open_auth0_forgot_password_check_email_T = ()=>void
