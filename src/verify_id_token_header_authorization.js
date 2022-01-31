import { throw_unauthorized } from '@ctx-core/error'
import { header_authorization_jwt_token_, validate_current_jwt } from '@ctx-core/jwt'
import { logout_auth0_token_error } from './logout_auth0_token_error.js'
import { validate_auth0_token_current } from './validate_auth0_token_current.js'
/** @typedef {import('./auth0_token$_.d.ts').auth0_token_T}auth0_token_T */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {auth0_token_T}auth0_token
 * @return {Promise<string>}
 * @private
 */
export async function verify_id_token_header_authorization(ctx, auth0_token) {
	const id_token_header_authorization = id_token_header_authorization_(auth0_token)
	try {
		if (!id_token_header_authorization) {
			throw_unauthorized({
				data: auth0_token
			})
		}
		await validate_auth0_token_current(auth0_token)
		const jwt_token = header_authorization_jwt_token_(id_token_header_authorization)
		validate_current_jwt(jwt_token)
	} catch (err) {
		console.error(err)
		logout_auth0_token_error(ctx, err)
		throw_unauthorized(err)
	}
	return id_token_header_authorization
}
/**
 * @param {auth0_token_T}auth0_token
 * @return {string|null}
 * @private
 */
function id_token_header_authorization_(auth0_token) {
	if (!auth0_token) return null
	const { id_token, token_type } = auth0_token
	return token_type && id_token ? `${token_type} ${id_token}` : null
}
