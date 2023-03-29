import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN__/index.js'
/** @typedef {import('auth0').TokenResponse}TokenResponse */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/** @typedef {import('@ctx-core/jwt').JwtToken}JwtToken */
/** @typedef {import('./index.d.ts').auth0__oauth_token__fetch__body_T}auth0__oauth_token__fetch__body_T */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {auth0__oauth_token__fetch__body_T}body
 * @return {Promise<[TokenResponse|Auth0Error, Response]>}
 */
export async function auth0__oauth_token__fetch_post(
	ctx,
	body
) {
	return await fetch_response_pair_(`https://${AUTH0_DOMAIN_(ctx)}/oauth/token`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
}
export {
	auth0__oauth_token__fetch_post as post_auth0_oauth_token,
}
