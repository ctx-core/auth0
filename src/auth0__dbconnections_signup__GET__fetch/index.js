import { fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN__/index.js'
/** @typedef {import('auth0').UserData}UserData */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/** @typedef {import('./index.d.ts').auth0__dbconnections_signup__fetch__body_T}auth0__dbconnections_signup__fetch__body_T */
/**
 * @see {@link https://auth0.com/docs/libraries/custom-signup}
 */
export const [
	auth0__dbconnections_signup__GET__fetch,
	auth0__dbconnections_signup__GET__fetch2
] = fetch__template_pair_(
	/**
	 * @param {Ctx}ctx
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
	auth0__dbconnections_signup__GET__fetch as post_auth0_dbconnections_signup,
}
