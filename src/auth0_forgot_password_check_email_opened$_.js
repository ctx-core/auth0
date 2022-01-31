import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened$_ } from './auth0_opened$_.js'
const key = 'auth0_forgot_password_check_email_opened$'
/** @type {import('auth0_forgot_password_check_email_opened$_.d.ts').auth0_forgot_password_check_email_opened$_} */
export const auth0_forgot_password_check_email_opened$_ = be_(key, (
	ctx
)=>
	computed$(auth0_opened$_(ctx),
		auth0_opened=>
			auth0_opened === 'forgot_password_check_email'
	))
export {
	auth0_forgot_password_check_email_opened$_ as b__opened__forgot_password_check_email,
}
