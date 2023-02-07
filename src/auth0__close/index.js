import { auth0__opened__ } from '../auth0__opened__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__close(ctx) {
	auth0__opened__(ctx).$ = null
}
export {
	auth0__close as close_auth0,
}
