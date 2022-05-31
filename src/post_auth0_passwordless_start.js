import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { assign } from '@ctx-core/object'
import { AUTH0_DOMAIN__ } from './AUTH0_DOMAIN__.js'
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}body
 * @return {Promise<[string|Auth0Error, Response]>}
 */
export async function post_auth0_passwordless_start(ctx, body) {
	const { hostname, pathname } = window.location
	const redirect_uri = `https://${hostname}/auth?redirect_url=${pathname}`
	assign(body, {
		authParams: {
			redirect_uri
		}
	})
	return await fetch_response_pair_(`https://${AUTH0_DOMAIN__(ctx).$}/passwordless/start`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
}
