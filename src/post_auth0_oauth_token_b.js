import { fetch } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'post_auth0_oauth_token'
/** @type {import('./post_auth0_oauth_token_b.d.ts').post_auth0_oauth_token_b} */
export const post_auth0_oauth_token_b = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return async function post_auth0_oauth_token(body) {
		const res = await fetch(`https://${AUTH0_DOMAIN$.$}/oauth/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
		return [await res.json(), res]
	}
})
