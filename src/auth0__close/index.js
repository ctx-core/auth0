import { auth0__opened$_ } from '../auth0__opened/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__close(ctx) {
	auth0__opened__set(ctx, false)
}
export {
	auth0__close as close_auth0,
}
