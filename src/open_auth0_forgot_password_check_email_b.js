import { be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'open_auth0_forgot_password_check_email'
/** @type {import('./open_auth0_forgot_password_check_email_b.d.ts').open_auth0_forgot_password_check_email_b} */
export const open_auth0_forgot_password_check_email_b = be_(key, ctx=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return open_auth0_forgot_password_check_email
	function open_auth0_forgot_password_check_email() {
		auth0_opened$.$ = 'forgot_password_check_email'
	}
})
