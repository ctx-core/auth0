import { validate_auth0_email } from './validate_auth0_email'
export function validate_auth0_forgot_password(form) {
	return validate_auth0_email(form)
}
