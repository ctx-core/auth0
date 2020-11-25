import { assign } from '@ctx-core/object'
import { validate_auth0_email } from './validate_auth0_email'
import { validate_auth0_password_confirmation } from './validate_auth0_password_confirmation'
export function validate_auth0_signup(form) {
	const email_error = validate_auth0_email(form)
	const password_confirmation_error = validate_auth0_password_confirmation(form)
	const signup_error = {}
	let has__errors
	if (email_error || password_confirmation_error) {
		has__errors = true
		assign(signup_error, email_error, password_confirmation_error)
	}
	return has__errors && signup_error
}
