import { header_authorization_jwt_token_ } from '@ctx-core/jwt'
import { auth0_validate_current_jwt } from './auth0_validate_current_jwt/index.js'
import { logout_auth0_token_error } from './logout_auth0_token_error.js'
import { throw_unauthorized_auth0 } from './throw_unauthorized_auth0.js'
import { validate_auth0_token } from './validate_auth0_token/index.js'
/** @typedef {import('./auth0_token__.d.ts').auth0_token_T}auth0_token_T */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {auth0_token_T}auth0_token
 * @return {Promise<string>}
 * @private
 */
export async function verify_id_token_header_authorization(ctx, auth0_token) {
	const id_token_header_authorization = id_token_header_authorization_(auth0_token)
	if (!id_token_header_authorization) {
		throw_unauthorized_auth0({ data: auth0_token })
	}
	try {
		await validate_auth0_token(auth0_token)
		const jwt_token = header_authorization_jwt_token_(id_token_header_authorization)
		auth0_validate_current_jwt(jwt_token)
	} catch (err) {
		console.error(err)
		logout_auth0_token_error(ctx, err)
		throw_unauthorized_auth0(err)
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
