import { auth0__bad_gateway__throw } from '../auth0__bad_gateway__throw/index.js'
/**
 * @param user{import('auth0').User|import('auth0-js').Auth0Error|import('auth0-js').Auth0UserProfile}
 */
export function auth0__user__validate(user) {
	const user_error = user
	if (user_error === null || user_error === void 0 ? void 0 : user_error.error) {
		console.error(`auth0__user__validate`)
		console.error(`${user_error.statusCode} ${user_error.error}`)
		console.error(user_error.description)
	}
	const user_profile = user
	if (!user_profile || !user_profile.user_id) {
		auth0__bad_gateway__throw({
			http_status: user_error.statusCode,
			data: user_error
		})
	}
}
export {
	auth0__user__validate as validate_auth0_user,
}
