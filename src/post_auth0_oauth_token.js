import { fetch_response_pair_, headers_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN$_ } from './AUTH0_DOMAIN$_.js'
/** @typedef {import('auth0').TokenResponse}TokenResponse */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}body
 * @return {Promise<[TokenResponse|Auth0Error, Response]>}
 */
export async function post_auth0_oauth_token(ctx, body) {
	return await fetch_response_pair_(`https://${AUTH0_DOMAIN$_(ctx).$}/oauth/token`, {
		method: 'POST',
		headers: headers_({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(body)
	})
}
