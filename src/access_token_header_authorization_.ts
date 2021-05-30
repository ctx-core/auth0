import type { nullish } from '@ctx-core/function'
import type { auth0_token_T } from './auth0_token$_b'
export function access_token_header_authorization_(auth0_token:auth0_token_T):access_token_header_authorization_T {
	const access_token_header_authorization =
		auth0_access_token_authorization_()
		|| null
	return access_token_header_authorization
	function auth0_access_token_authorization_() {
		if (!auth0_token) return
		const { access_token, token_type } = auth0_token
		const auth0_token_authorization =
			(token_type && access_token)
			? `${token_type} ${access_token}`
			: null
		return auth0_token_authorization
	}
}
export type access_token_header_authorization_T = string|nullish
export {
	access_token_header_authorization_ as _access_token_header_authorization
}
