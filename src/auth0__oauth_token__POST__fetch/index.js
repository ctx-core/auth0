import { fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN__/index.js'
/** @typedef {import('auth0').TokenResponse}TokenResponse */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/** @typedef {import('@ctx-core/jwt').JwtToken}JwtToken */
/** @typedef {import('./index.d.ts').auth0__oauth_token__fetch__body_T}auth0__oauth_token__fetch__body_T */
export const [
	auth0__oauth_token__POST__fetch,
	auth0__oauth_token__POST__fetch2
] = fetch__template_pair_(
	(ctx, body)=>
		fetch(
			`https://${AUTH0_DOMAIN_(ctx)}/oauth/token`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			}))
export {
	auth0__oauth_token__POST__fetch2 as auth0__oauth_token__fetch_post,
	auth0__oauth_token__POST__fetch2 as post_auth0_oauth_token,
}
