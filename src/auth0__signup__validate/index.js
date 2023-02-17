import { assign } from '@ctx-core/object'
import { auth0__email__validate } from '../auth0__email__validate/index.js'
import { auth0__password_confirmation__validate } from '../auth0__password_confirmation__validate/index.js'
/** @type {typeof import('./index.d.ts').auth0__signup__validate} */
/**
 * @param data{import('../_types').auth0__signup_data_T}
 * @returns {import('auth0-js').Auth0Error|null}
 */
export function auth0__signup__validate(data) {
	const email_error = auth0__email__validate(data)
	const password_confirmation_error = auth0__password_confirmation__validate(data)
	const signup_error = {}
	let has_errors
	if (email_error || password_confirmation_error) {
		has_errors = true
		assign(signup_error, email_error, password_confirmation_error)
	}
	return has_errors ? signup_error : null
}
export {
	auth0__signup__validate as validate_auth0_signup,
}
