import { throw_unauthorized } from '@ctx-core/error'
import { header_authorization_jwt_token_, validate_current_jwt } from '@ctx-core/jwt'
import { be_ } from '@ctx-core/object'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b.js'
import { validate_auth0_token_current } from './validate_auth0_token_current.js'
const key = 'verify_id_token_header_authorization_'
/** @type {import('./verify_id_token_header_authorization__b.d.ts').verify_id_token_header_authorization__b} */
export const verify_id_token_header_authorization__b = be_(key, ctx=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return verify_id_token_header_authorization_
	async function verify_id_token_header_authorization_(auth0_token) {
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
			logout_auth0_token_error(err)
			throw_unauthorized(err)
		}
		return id_token_header_authorization
	}
	function id_token_header_authorization_($auth0_token) {
		if (!$auth0_token) return null
		const { id_token, token_type } = $auth0_token
		return token_type && id_token ? `${token_type} ${id_token}` : null
	}
})
export { verify_id_token_header_authorization__b as _verify_id_token_header_authorization_b }
