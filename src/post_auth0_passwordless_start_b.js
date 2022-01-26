import { fetch } from '@ctx-core/fetch-undici'
import { be_, assign } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'post_auth0_passwordless_start'
/** @type {import('./post_auth0_passwordless_start_b.d.ts').post_auth0_passwordless_start_b} */
export const post_auth0_passwordless_start_b = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return post_auth0_passwordless_start
	async function post_auth0_passwordless_start(body) {
		const { hostname, pathname } = window.location
		const redirect_uri = `https://${hostname}/auth?redirect_url=${pathname}`
		assign(body, {
			authParams: {
				redirect_uri
			}
		})
		const AUTH0_DOMAIN = AUTH0_DOMAIN$.$
		const res = await fetch(`https://${AUTH0_DOMAIN}/passwordless/start`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
		return [await res.json(), res]
	}
})
