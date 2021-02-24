import type { Auth0Error, Auth0UserProfile } from 'auth0-js'
import { error_ctx_T, throw_bad_gateway } from '@ctx-core/error'
export function validate_auth0_user(user:Auth0UserProfile|Auth0Error|null) {
	const user_error = user as Auth0Error
	if (user_error && user_error.error) {
		console.error(`validate_auth0_user`)
		console.error(`${user_error.statusCode} ${user_error.error}`)
		console.error(user_error.description)
	}
	const user_profile = user as Auth0UserProfile
	if (!user_profile || !user_profile.user_id) {
		throw_bad_gateway({
			http_status: user_error.statusCode as number,
			data: user_error
		} as error_ctx_T)
	}
}
