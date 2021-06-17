import { _email_valid } from '@ctx-core/email'
import type { auth0_token_error_I } from './auth0_token_error$_b'
export function validate_auth0_email(
	data:validate_auth0_email_data_T
):validate_auth0_email_error_T|null {
	const { email } = data
	const email_error:auth0_token_error_I = {}
	let has_errors
	// if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)) {
	//	 signup_error.password = 'Your password must be at least 8 characters and contain at least one upper case letter, one lower case letter, and one number.'
	//	 has_errors = true
	// }
	if (!_email_valid(email)) {
		email_error.email = 'Please enter a valid email address.'
		has_errors = true
	}
	return has_errors ? email_error : null
}
export interface validate_auth0_email_data_T {
	email:string
}
export type validate_auth0_email_error_T = auth0_token_error_I
