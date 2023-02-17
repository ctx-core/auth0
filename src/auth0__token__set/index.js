import { auth0__token__json__ } from '../auth0__token__json__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0__token__.d.ts').auth0_token_T}auth0__token
 */
export function auth0__token__set(
	ctx, auth0__token
) {
	auth0__token__json__(ctx).$ = JSON.stringify(auth0__token)
}
export {
	auth0__token__set as set_auth0_token,
}
