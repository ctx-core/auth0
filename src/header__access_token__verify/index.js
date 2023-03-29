import { auth0__unauthorized__throw } from '../auth0__unauthorized/index.js'
import { header__access_token_ } from '../header__access_token_/index.js'
/** @typedef {import('../auth0__unauthorized').argument__auth0__unauthorized__error_o_T}argument__auth0__unauthorized__error_o_T */
/**
 * @param auth0__token{typeof import('../_types').auth0__token_T}
 * @returns {import('../_types').header__access_token_T}
 */
export function header__access_token__verify(auth0__token) {
	const header__access_token = header__access_token_(auth0__token)
	if (!header__access_token) {
		auth0__unauthorized__throw(
			'header__access_token__verify',
			/** @type {argument__auth0__unauthorized__error_o_T} */{
				auth0__token,
			})
	}
	return header__access_token
}
export {
	header__access_token__verify as verify_access_token_header_authorization,
}
