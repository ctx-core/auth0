import { throw_unauthorized } from '@ctx-core/error'
import { _access_token_header_authorization } from './_access_token_header_authorization'
import type { $auth0_token_T } from './auth0_token_b'
import type { auth0_error_Ctx } from './auth0_error_Ctx'
export function _verify_access_token_header_authorization(
	auth0_token:$auth0_token_T
):string {
	const access_token_header_authorization = _access_token_header_authorization(auth0_token)
	if (!access_token_header_authorization) {
		throw_unauthorized({
			auth0_token,
			error_message: '_verify_access_token_header_authorization'
		} as auth0_error_Ctx)
	}
	return access_token_header_authorization as string
}
