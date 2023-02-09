import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
/** @typedef {import('auth0').UserData}UserData */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {Partial<import('./index.d.ts').auth0__dbconnections_signup__fetch__body_T>}body
 * @return {Promise<[UserData|Auth0Error, Response]>}
 * @see {@link https://auth0.com/docs/libraries/custom-signup}
 */
export async function auth0__dbconnections_signup__fetch_get(ctx, body) {
	return await fetch_response_pair_(`https://${AUTH0_DOMAIN__(ctx).$}/dbconnections/signup`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
}
export {
	auth0__dbconnections_signup__fetch_get as post_auth0_dbconnections_signup,
}
