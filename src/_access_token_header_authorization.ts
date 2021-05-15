import type { $auth0_token_T } from './auth0_token_b'
export function _access_token_header_authorization(auth0_token: $auth0_token_T): access_token_header_authorization_T {
	const access_token_header_authorization =
		_auth0_access_token_authorization()
		|| false
	return access_token_header_authorization
	function _auth0_access_token_authorization() {
		if (!auth0_token) return
		const { access_token, token_type } = auth0_token
		const auth0_token_authorization =
			(token_type && access_token)
			? `${token_type} ${access_token}`
			: null
		return auth0_token_authorization
	}
}
export type access_token_header_authorization_T = string | false | null
