import { jwt__expiration__validate } from '@ctx-core/jwt'
/**
 * @param {string}jwt_token
 */
export function auth0__jwt__expiration__validate(jwt_token) {
	try {
		jwt__expiration__validate(jwt_token)
	} catch (err) {
		if (typeof err === 'object' && !err.error_description) {
			// Auth0Error
			err.error_description = err.error_message
		}
		throw err
	}
}
export {
	auth0__jwt__expiration__validate as auth0_validate_current_jwt,
}
