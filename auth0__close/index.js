/// <reference types="ctx-core" />
import { auth0__opened__set } from '../auth0__opened/index.js'
/**
 * @param {ctx_T}ctx
 */
export function auth0__close(ctx) {
	auth0__opened__set(ctx, false)
}
export {
	auth0__close as close_auth0,
}
