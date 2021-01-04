import { assign } from '@ctx-core/object'
import { validate_auth0_email } from './validate_auth0_email'
import { validate_auth0_password_confirmation } from './validate_auth0_password_confirmation'
import type { signup_data_type } from './signup_data_type'
export function validate_auth0_signup(data:signup_data_type) {
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
