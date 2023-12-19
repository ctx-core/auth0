import { auth0__email__validate } from '../auth0__email__validate/index.js'
import { auth0__password_confirmation__validate } from '../auth0__password_confirmation__validate/index.js'
/** @type {typeof import('./index.d.ts').auth0__signup__validate} */
/**
 * @param {import('../_types/index.js').auth0__signup_data_T}data
 * @returns {import('auth0-js').Auth0Error|null}
 */
export function auth0__signup__validate(data) {
	const email_error = auth0__email__validate(data)
	const password_confirmation_error =
		auth0__password_confirmation__validate(data)
	let signup_error
	if (email_error || password_confirmation_error) {
		signup_error = { ...email_error, ...password_confirmation_error }
	}
	return signup_error
}
export {
	auth0__signup__validate as validate_auth0_signup,
}
