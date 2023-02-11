import { auth0__opened__ } from '../auth0__opened__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__login__open(ctx) {
	auth0__opened__(ctx).$ = 'login'
}
export {
	auth0__login__open as open_auth0_login,
}