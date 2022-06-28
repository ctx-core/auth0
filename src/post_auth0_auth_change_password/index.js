import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { auth0_token__ } from '../auth0_token__/index.js'
import { verify_id_token_header_authorization } from '../verify_id_token_header_authorization/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}password
 * @return {Promise<[auth_change_password_T, Response]>}
 */
export async function post_auth0_auth_change_password(ctx, password) {
	const body = { password }
	const Authorization = await verify_id_token_header_authorization(ctx, auth0_token__(ctx).$)
	return await fetch_response_pair_('/auth/change_password', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization
		},
		body: JSON.stringify(body)
	})
}
