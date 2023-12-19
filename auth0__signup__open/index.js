/// <reference types="ctx-core" />
import { auth0__opened__set } from '../auth0__opened/index.js'
/**
 * @param {Ctx}ctx
 */
export function auth0__signup__open(ctx) {
	auth0__opened__set(ctx, 'signup')
}
export {
	auth0__signup__open as open_auth0_signup,
}
