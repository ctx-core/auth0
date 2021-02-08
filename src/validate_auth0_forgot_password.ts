import {
	validate_auth0_email, validate_auth0_email_data_type, validate_auth0_email_error_type
} from './validate_auth0_email'
export function validate_auth0_forgot_password(
	data:validate_auth0_email_data_type
):false|validate_auth0_email_error_type {
	return validate_auth0_email(data)
}