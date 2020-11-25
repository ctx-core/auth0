export function _access_token_header_authorization(auth0_token) {
	const access_token_header_authorization =
		_auth0_access_token_authorization()
		|| false
	return access_token_header_authorization
	function _auth0_access_token_authorization() {
		const token_type = auth0_token && auth0_token.token_type
		const access_token = auth0_token && auth0_token.access_token
		const auth0_token_authorization =
			(token_type && access_token)
			? `${token_type} ${access_token}`
			: null
		return auth0_token_authorization
	}
}
