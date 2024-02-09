import { fetch__template_pair__new } from 'ctx-core/fetch'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN/index.js'
/** @typedef {import('auth0').UserData} */
/** @typedef {import('auth0-js').Auth0Error} */
/** @typedef {import('./index.d.ts').auth0__dbconnections_signup__fetch__body_T} */
/**
 * @see {@link https://auth0.com/docs/libraries/custom-signup}
 */
export const [
	auth0__dbconnections_signup__GET__fetch,
	auth0__dbconnections_signup__GET__fetch2
] = fetch__template_pair__new(
	/**
	 * @param {ctx_T}ctx
	 * @param {auth0__dbconnections_signup__fetch__body_T}body
	 * @returns {Promise<Response>}
	 */
	(ctx, body)=>
		fetch(
			`https://${AUTH0_DOMAIN_(ctx)}/dbconnections/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
)
export {
	auth0__dbconnections_signup__GET__fetch as auth0__dbconnections_signup__fetch_get,
	auth0__dbconnections_signup__GET__fetch as post_auth0_dbconnections_signup,
}
