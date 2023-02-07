import { header__access_token_ } from '../header__access_token_/index.js'
import { auth0__unauthorized__throw } from '../auth0__unauthorized__throw/index.js'
/** @type {typeof import('./index.d.ts').header__access_token__verify} */
export const header__access_token__verify = auth0_token=>{
	const header__access_token = header__access_token_(auth0_token)
	if (!header__access_token) {
		auth0__unauthorized__throw(/** @type {import('@ctx-core/error').error_o_T} */{
			auth0_token,
			error_message: 'header__access_token__verify'
		})
	}
	return header__access_token
}
export {
	header__access_token__verify as  verify_access_token_header_authorization,
}
