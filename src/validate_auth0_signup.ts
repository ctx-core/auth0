import { assign } from '@ctx-core/object'
import { validate_auth0_email } from './validate_auth0_email.js'
import { validate_auth0_password_confirmation } from './validate_auth0_password_confirmation.js'
import type { signup_data_I } from './signup_data_I.js'
export function validate_auth0_signup(data:signup_data_I) {
	const email_error = validate_auth0_email(data)
	const password_confirmation_error = validate_auth0_password_confirmation(data)
	const signup_error = {}
	let has_errors
	if (email_error || password_confirmation_error) {
		has_errors = true
		assign(signup_error, email_error, password_confirmation_error)
	}
	return has_errors && signup_error
}
