import { throw_bad_gateway } from '@ctx-core/error'
/** @type {import('./validate_auth0_user.d.ts').validate_auth0_user} */
export const validate_auth0_user = (user)=>{
	const user_error = user
	if (user_error === null || user_error === void 0 ? void 0 : user_error.error) {
		console.error(`validate_auth0_user`)
		console.error(`${user_error.statusCode} ${user_error.error}`)
		console.error(user_error.description)
	}
	const user_profile = user
	if (!user_profile || !user_profile.user_id) {
		throw_bad_gateway({
			http_status: user_error.statusCode,
			data: user_error
		})
	}
}
