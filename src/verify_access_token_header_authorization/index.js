import { access_token_header_authorization_ } from '../access_token_header_authorization_/index.js'
import { throw_unauthorized_auth0 } from '../throw_unauthorized_auth0/index.js'
/** @type {import('./verify_access_token_header_authorization.d.ts').verify_access_token_header_authorization} */
export const verify_access_token_header_authorization = auth0_token=>{
	const access_token_header_authorization = access_token_header_authorization_(auth0_token)
	if (!access_token_header_authorization) {
		throw_unauthorized_auth0({
			auth0_token,
			error_message: 'verify_access_token_header_authorization'
		})
	}
	return access_token_header_authorization
}