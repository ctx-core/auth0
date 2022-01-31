/** @type {import('./access_token_header_authorization_.d.ts').access_token_header_authorization_} */
export const access_token_header_authorization_ = (auth0_token)=>{
	if (!auth0_token) return null
	const { access_token, token_type } = auth0_token
	const auth0_token_authorization =
		(token_type && access_token)
		? `${token_type} ${access_token}`
		: null
	return auth0_token_authorization
}
export {
	access_token_header_authorization_ as _access_token_header_authorization
}
