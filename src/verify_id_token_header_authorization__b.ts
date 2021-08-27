import { B, be_ } from '@ctx-core/object'
import { throw_unauthorized } from '@ctx-core/error'
import { header_authorization_jwt_token_, validate_current_jwt } from '@ctx-core/jwt'
import { validate_auth0_token_current } from './validate_auth0_token_current.js'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b.js'
import type { auth0_token_T } from './auth0_token$_b.js'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'verify_id_token_header_authorization_'
export const verify_id_token_header_authorization__b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	return verify_id_token_header_authorization_ as verify_id_token_header_authorization__T
	async function verify_id_token_header_authorization_($auth0_token:auth0_token_T) {
		const id_token_header_authorization = id_token_header_authorization_($auth0_token)
		try {
			if (!id_token_header_authorization) {
				throw_unauthorized({ data: $auth0_token })
			}
			await validate_auth0_token_current($auth0_token)
			const jwt_token = header_authorization_jwt_token_(id_token_header_authorization)
			validate_current_jwt(jwt_token)
		} catch (err:any) {
			console.error(err)
			logout_auth0_token_error(err)
			throw_unauthorized(err)
		}
		return id_token_header_authorization
	}
	function id_token_header_authorization_($auth0_token:auth0_token_T) {
		if (!$auth0_token) return null
		const { id_token, token_type } = $auth0_token
		return (
			token_type && id_token
			? `${token_type} ${id_token}`
			: null
		)
	}
})
export type verify_id_token_header_authorization__T =
	($auth0_token:auth0_token_T)=>Promise<string>
export type _verify_id_token_header_authorization_T = verify_id_token_header_authorization__T
export {
	verify_id_token_header_authorization__b as _verify_id_token_header_authorization_b
}
