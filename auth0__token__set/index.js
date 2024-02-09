/// <reference types="ctx-core" />
/// <reference types="../auth0__token/index.d.ts" />
import { auth0__token__json__set } from '../auth0__token__json/index.js'
/**
 * @param {ctx_T}ctx
 * @param {auth0_token_T}auth0__token
 */
export function auth0__token__set(
	ctx,
	auth0__token
) {
	auth0__token__json__set(
		ctx,
		JSON.stringify(auth0__token))
}
export {
	auth0__token__set as set_auth0_token,
}
