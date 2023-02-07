import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { auth0__token__ } from '../auth0__token__/index.js'
import { auth0__authorization__verify } from '../auth0__authorization__verify/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}password
 * @return {Promise<[auth_change_password_T, Response]>}
 */
export async function auth0__change_password__fetch_post(ctx, password) {
	const body = { password }
	const Authorization = await auth0__authorization__verify(ctx, auth0__token__(ctx).$)
	return await fetch_response_pair_('/auth/change_password', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization
		},
		body: JSON.stringify(body)
	})
}
export {
	auth0__change_password__fetch_post as post_auth0_auth_change_password,
}
