import { _email_valid } from '@ctx-core/email'
/** @type {import('./validate_auth0_email.d.ts').validate_auth0_email} */
export const validate_auth0_email = (data)=>{
	const { email } = data
	const email_error = {}
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
