import { throw_unauthorized } from '@ctx-core/error'
import type { auth0_error_ctx_type } from './auth0_error_ctx_type'
import { _access_token_header_authorization } from './_access_token_header_authorization'
export function _verify_access_token_header_authorization(auth0_token) {
	const verify_access_token_header_authorization =
		_access_token_header_authorization(auth0_token)
	if (!verify_access_token_header_authorization) {
		throw_unauthorized({
			auth0_token,
			error_message: '_verify_access_token_header_authorization'
		} as auth0_error_ctx_type)
	}
	return verify_access_token_header_authorization
}
