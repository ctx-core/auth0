import { validate_current_jwt } from '@ctx-core/jwt'
/**
 * @param {string|import('@ctx-core/function').nullish}jwt_token
 */
export function auth0_validate_current_jwt(jwt_token) {
	try {
		validate_current_jwt(jwt_token)
	} catch (err) {
		if (typeof err === 'object' && !err.error_description) {
			// Auth0Error
			err.error_description = err.error_message
		}
		throw err
	}
}
