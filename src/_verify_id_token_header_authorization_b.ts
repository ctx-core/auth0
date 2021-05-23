import { _b } from '@ctx-core/object'
import { throw_unauthorized } from '@ctx-core/error'
import { _header_authorization_jwt_token, validate_current_jwt } from '@ctx-core/jwt'
import { validate_auth0_token_current } from './validate_auth0_token_current'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b'
import type { $auth0_token_T } from './auth0_token_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = '_verify_id_token_header_authorization'
export const _verify_id_token_header_authorization_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return _verify_id_token_header_authorization as _verify_id_token_header_authorization_T
	async function _verify_id_token_header_authorization($auth0_token:$auth0_token_T) {
		const id_token_header_authorization = _id_token_header_authorization($auth0_token)
		try {
			if (!id_token_header_authorization) {
				throw_unauthorized({ data: $auth0_token })
			}
			await validate_auth0_token_current($auth0_token)
			const jwt_token = _header_authorization_jwt_token(id_token_header_authorization)
			validate_current_jwt(jwt_token)
		} catch (err) {
			console.error(err)
			logout_auth0_token_error(err)
			throw_unauthorized(err)
		}
		return id_token_header_authorization
	}
	function _id_token_header_authorization($auth0_token:$auth0_token_T) {
		if (!$auth0_token) return null
		const { id_token, token_type } = $auth0_token
		return (
			token_type && id_token
			? `${token_type} ${id_token}`
			: null
		)
	}
})
export type _verify_id_token_header_authorization_T =
	($auth0_token:$auth0_token_T)=>Promise<string>
