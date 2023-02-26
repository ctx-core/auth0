import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN__/index.js'
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./index.d.ts').auth0__passwordless_start__fetch__body_T}body
 * @return {Promise<[string|Auth0Error, Response]>}
 */
export async function auth0__passwordless_start__fetch_post(
	ctx, body
) {
	return await fetch_response_pair_(`https://${AUTH0_DOMAIN_(ctx)}/passwordless/start`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
}
export {
	auth0__passwordless_start__fetch_post as post_auth0_passwordless_start,
}
