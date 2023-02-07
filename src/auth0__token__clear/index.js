import { auth0__token__set } from '../auth0__token__set/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {null|undefined}value
 */
export function auth0__token__clear(ctx, value = null) {
	auth0__token__set(ctx, value)
}
export {
	auth0__token__clear as clear_auth0_token,
}
