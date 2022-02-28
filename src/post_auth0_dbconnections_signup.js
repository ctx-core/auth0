import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN$_ } from './AUTH0_DOMAIN$_.js'
/** @typedef {import('auth0').UserData}UserData */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}body
 * @return {Promise<[UserData|Auth0Error, Response]>}
 * @see {@link https://auth0.com/docs/libraries/custom-signup}
 */
export async function post_auth0_dbconnections_signup(ctx, body) {
	return await fetch_response_pair_(`https://${AUTH0_DOMAIN$_(ctx).$}/dbconnections/signup`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
}
