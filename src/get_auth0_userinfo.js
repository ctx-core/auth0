import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { verify_access_token_header_authorization } from './verify_access_token_header_authorization.js'
/** @type {import('./get_auth0_userinfo.d.ts').get_auth0_userinfo} */
export const get_auth0_userinfo = async params=>{
	const { auth0_token, AUTH0_DOMAIN, } = params
	const authorization = verify_access_token_header_authorization(auth0_token)
	return (
		/** @type {[get_auth0_userinfo_T, Response]} */
		await fetch_response_pair_(`https://${AUTH0_DOMAIN}/userinfo`, {
			headers: {
				'Content-Type': 'application/json',
				authorization
			}
		}))
}
