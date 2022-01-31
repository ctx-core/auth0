import { fetch } from '@ctx-core/fetch-undici'
import { auth0_token$_ } from './auth0_token$_.js'
import { verify_id_token_header_authorization } from './verify_id_token_header_authorization.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {string}password
 * @return {Promise<[auth_change_password_T, Response]>}
 */
export async function post_auth0_auth_change_password(ctx, password) {
	const body = {
		password
	}
	const Authorization = await verify_id_token_header_authorization(ctx, auth0_token$_(ctx).$)
	const res = await fetch('/auth/change_password', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization
		},
		body: JSON.stringify(body)
	})
	/** @type {auth_change_password_T} */
	const auth_change_password = await res.json()
	return [auth_change_password, res]
}
