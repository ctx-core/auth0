import { validate_auth0_email, validate_auth0_email_data_T } from './validate_auth0_email'
export function validate_auth0_forgot_password(data:validate_auth0_email_data_T) {
	return validate_auth0_email(data)
}
