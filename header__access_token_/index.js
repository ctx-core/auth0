/** @typedef {import('../_types/index.js').auth0__token_T}auth0__token_T */
/** @typedef {import('../_types/index.js').header__access_token_T}header__access_token_T */
/**
 * @param {auth0__token_T}auth0__token
 * @returns {header__access_token_T}
 */
export function header__access_token_(
	auth0__token
) {
	if (!auth0__token) return null
	const {
		access_token,
		token_type
	} = auth0__token
	const auth0_token_authorization =
		(token_type && access_token)
			? `${token_type} ${access_token}`
			: null
	return auth0_token_authorization
}
export {
	header__access_token_ as access_token_header_authorization_
}
