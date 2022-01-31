import { fetch } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN$_ } from './AUTH0_DOMAIN$_.js'
/** @typedef {import('auth0').UserData}UserData */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}body
 * @return {Promise<[UserData|Auth0Error, Response]>}
 * @see {@link https://auth0.com/docs/libraries/custom-signup}
 */
async function post_auth0_dbconnections_signup(ctx, body) {
	const res = await fetch(`https://${AUTH0_DOMAIN$_(ctx).$}/dbconnections/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
	/** @type {UserData|Auth0Error} */
	const user_data_or_error = await res.json()
	return [user_data_or_error, res]
}
