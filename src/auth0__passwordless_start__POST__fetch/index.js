import { fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN$_/index.js'
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/** @typedef {import('./index.d.ts').auth0__passwordless_start__POST__fetch2__body_T}auth0__passwordless_start__POST__fetch2__body_T */
export const [
	auth0__passwordless_start__POST__fetch,
	auth0__passwordless_start__POST__fetch2,
] = fetch__template_pair_(
	/**
	 * @param {Ctx}ctx
	 * @param {auth0__passwordless_start__POST__fetch2__body_T}body
	 * @returns {Promise<Response>}
	 */
	(ctx, body)=>
		fetch(`https://${AUTH0_DOMAIN_(ctx)}/passwordless/start`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		})
)
export {
	auth0__passwordless_start__POST__fetch2 as auth0__passwordless_start__fetch_post,
	auth0__passwordless_start__POST__fetch2 as post_auth0_passwordless_start,
}
