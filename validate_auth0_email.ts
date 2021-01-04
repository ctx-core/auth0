import { _email_valid } from '@ctx-core/email'
export function validate_auth0_email(
	data:validate_auth0_email_data_type
):boolean|validate_auth0_email_error_type {
	const { email } = data
	const email_error:validate_auth0_email_error_type = {}
	let has_errors
	// if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)) {
	//	 signup_error.password = 'Your password must be at least 8 characters and contain at least one upper case letter, one lower case letter, and one number.'
	//	 has_errors = true
	// }
	if (!_email_valid(email)) {
		email_error.email = 'Please enter a valid email address.'
		has_errors = true
	}
	return has_errors && email_error
}
export interface validate_auth0_email_data_type {
	email:string
}
export interface validate_auth0_email_error_type {
	email?:string
}
