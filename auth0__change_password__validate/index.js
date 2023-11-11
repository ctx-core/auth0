import { auth0__password_confirmation__validate } from '../auth0__password_confirmation__validate/index.js'
/**
 * @param {import('../_types/index.js').auth0__password_confirmation__data_T}data
 * @returns {import('../_types/index.js').auth0__password_confirmation__error_T}
 */
export function auth0__change_password__validate(
	data
) {
	return auth0__password_confirmation__validate(data)
}
export {
	auth0__change_password__validate as validate_auth0_change_password,
}
