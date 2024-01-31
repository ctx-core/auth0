import { fetch__template_pair__new } from 'ctx-core/fetch'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN/index.js'
export const [
	auth0__oauth_token__POST__fetch,
	auth0__oauth_token__POST__fetch2
] = fetch__template_pair__new(
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
