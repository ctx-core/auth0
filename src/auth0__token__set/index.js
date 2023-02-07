import { auth0__token__json__ } from '../auth0__token__json__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0__token__.d.ts').auth0_token_T}auth0_token
 */
export function auth0__token__set(ctx, auth0_token) {
	auth0__token__json__(ctx).$ = JSON.stringify(auth0_token)
}
export {
	auth0__token__set as set_auth0_token,
}
