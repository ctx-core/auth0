import { auth0__token__clear } from '../auth0__token__clear/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__token__logout(ctx) {
	auth0__token__clear(ctx)
}
export {
	auth0__token__logout as logout_auth0_token,
}
