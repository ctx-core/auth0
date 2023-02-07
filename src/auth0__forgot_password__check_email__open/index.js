import { auth0__opened__ } from '../auth0__opened__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__forgot_password__check_email__open(ctx) {
	auth0__opened__(ctx).$ = 'forgot_password_check_email'
}
export {
	auth0__forgot_password__check_email__open as open_auth0_forgot_password_check_email,
}
