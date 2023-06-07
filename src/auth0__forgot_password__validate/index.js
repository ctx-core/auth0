import { auth0__email__validate } from '../auth0__email__validate/index.js'
/**
 * @param {import('../auth0__email__validate').auth0__email__validate__data_T}data
 * @returns {import('auth0-js').Auth0Error}
 */
export function auth0__forgot_password__validate(
	data
) {
	return auth0__email__validate(data)
}
export {
	auth0__forgot_password__validate as validate_auth0_forgot_password,
}
