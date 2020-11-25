import { _b } from '@ctx-core/object'
import { throw_unauthorized } from '@ctx-core/error'
import { _jwt_token__authorization__header, validate__current__jwt } from '@ctx-core/jwt'
import type { auth0_error_ctx_type } from './auth0_error_ctx_type'
import { validate_auth0_token_current } from './validate_auth0_token_current'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b'
export const _verify_id_token_header_authorization_b = _b(
	'_verify_id_token_header_authorization', (ctx)=>{
		const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
		return async function _authorization__header__id_token__verify(auth0_token) {
			const authorization__header__id_token = _id_token_header_authorization(auth0_token)
			try {
				if (!authorization__header__id_token) {
					throw_unauthorized(auth0_token as auth0_error_ctx_type)
				}
				await validate_auth0_token_current(auth0_token)
				const jwt_token = _jwt_token__authorization__header(authorization__header__id_token)
				validate__current__jwt(jwt_token)
			} catch (err) {
				console.error(err)
				logout_auth0_token_error(err)
				throw_unauthorized(err)
			}
			return authorization__header__id_token
		}
		function _id_token_header_authorization(auth0_token) {
			const token_type = auth0_token && auth0_token.token_type
			const id_token = auth0_token && auth0_token.id_token
			return (
				token_type && id_token
				? `${token_type} ${id_token}`
				: null
			)
		}
	})
