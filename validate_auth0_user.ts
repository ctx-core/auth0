import { error_ctx_type, throw_bad_gateway } from '@ctx-core/error'
export function validate_auth0_user(user) {
	if (user && user.error) {
		console.error(`validate_auth0_user`)
		console.error(`${user.statusCode} ${user.error}`)
		console.error(user.message)
	}
	if (!user || !user.user_id) {
		throw_bad_gateway(user, {
			http_status: user.statusCode as number
		} as error_ctx_type)
	}
}
