/// <reference types="ctx-core" />
import { auth0__token__set } from '../auth0__token__set/index.js'
/**
 * @param {ctx_T}ctx
 * @param {null|undefined}value
 */
export function auth0__token__clear(
	ctx,
	value = null
) {
	auth0__token__set(ctx, value)
}
export {
	auth0__token__clear as clear_auth0_token,
}
