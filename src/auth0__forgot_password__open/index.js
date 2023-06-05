import { auth0__opened__set } from '../auth0__opened$_/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__forgot_password__open(
	ctx
) {
	auth0__opened__set(ctx, 'forgot_password')
}
export {
	auth0__forgot_password__open as open_auth0_forgot_password,
}
