import { fetch } from '@ctx-core/fetch-undici'
import { assign } from '@ctx-core/object'
import { AUTH0_DOMAIN$_ } from './AUTH0_DOMAIN$_.js'
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}body
 * @return {Promise<[null|Auth0Error, Response]>}
 */
export async function post_auth0_passwordless_start(ctx, body) {
	const { hostname, pathname } = window.location
	const redirect_uri = `https://${hostname}/auth?redirect_url=${pathname}`
	assign(body, {
		authParams: {
			redirect_uri
		}
	})
	const res = await fetch(`https://${AUTH0_DOMAIN$_(ctx).$}/passwordless/start`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
	return [res.ok ? null : await res.json(), res]
}
