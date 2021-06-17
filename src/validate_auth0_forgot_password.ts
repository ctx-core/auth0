import { validate_auth0_email } from './validate_auth0_email'
import type {
	validate_auth0_email_data_T, validate_auth0_email_error_T,
} from './validate_auth0_email'
export function validate_auth0_forgot_password(
	data:validate_auth0_email_data_T
):validate_auth0_email_error_T|null {
	return validate_auth0_email(data)
}
