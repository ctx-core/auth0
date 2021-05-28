import { throw_unauthorized } from '@ctx-core/error'
import { access_token_header_authorization_fn } from './access_token_header_authorization_fn'
import type { $auth0_token_T } from './auth0_token_b'
import type { auth0_error_ctx_I } from './auth0_error_ctx_I'
export function verify_access_token_header_authorization_fn(
	auth0_token:$auth0_token_T
):string {
	const access_token_header_authorization = access_token_header_authorization_fn(auth0_token)
	if (!access_token_header_authorization) {
		throw_unauthorized({
			auth0_token,
			error_message: 'verify_access_token_header_authorization_fn'
		} as auth0_error_ctx_I)
	}
	return access_token_header_authorization as string
}
export {
	verify_access_token_header_authorization_fn as _verify_access_token_header_authorization
}
