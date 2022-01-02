import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_forgot_password_check_email_opened$'
/** @type {import('auth0_forgot_password_check_email_opened$_b.d.ts').auth0_forgot_password_check_email_opened$_b} */
export const auth0_forgot_password_check_email_opened$_b = be_(key, (
	ctx
)=>
	computed$(auth0_opened$_b(ctx),
		auth0_opened=>
			auth0_opened === 'forgot_password_check_email'
	))
export {
	auth0_forgot_password_check_email_opened$_b as b__opened__forgot_password_check_email,
}
