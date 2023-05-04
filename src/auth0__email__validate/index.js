import { _email_valid } from '@ctx-core/email'
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/** @type {typeof import('./index.d.ts').auth0__email__validate} */
/** @typedef {import('./index.d.ts').auth0__email__validate__data_T}auth0__email__validate__data_T */
/**
 * @param data{auth0__email__validate__data_T}
 * @returns {Auth0Error|null}
 */
export function auth0__email__validate(
	data
) {
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
export {
	auth0__email__validate as validate_auth0_email,
}
