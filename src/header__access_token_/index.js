/** @type {typeof import('./index.d.ts').header__access_token_} */
export const header__access_token_ = auth0_token=>{
	if (!auth0_token) return null
	const { access_token, token_type } = auth0_token
	const auth0_token_authorization =
		(token_type && access_token)
		? `${token_type} ${access_token}`
		: null
	return auth0_token_authorization
}
export {
	header__access_token_ as access_token_header_authorization_
}
