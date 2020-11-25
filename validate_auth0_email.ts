import { _valid__email } from '@ctx-core/email'
export function validate_auth0_email(form) {
	const { email } = form
	const email_error:{ email?:string } = {}
	let has_errors
	// if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)) {
	//	 signup_error.password = 'Your password must be at least 8 characters and contain at least one upper case letter, one lower case letter, and one number.'
	//	 has_errors = true
	// }
	if (!_valid__email(email)) {
		email_error.email = 'Please enter a valid email address.'
		has_errors = true
	}
	return has_errors && email_error
}
