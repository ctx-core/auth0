import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { header__access_token__verify } from '../header__access_token__verify/index.js'
/** @type {typeof import('./index.d.ts').auth0__userinfo__fetch_get} */
export const auth0__userinfo__fetch_get = async params=>{
	const { auth0_token, AUTH0_DOMAIN, } = params
	const authorization = header__access_token__verify(auth0_token)
	return (
		/** @type {[auth0__userinfo__fetch_get__payload_T, Response]} */
		await fetch_response_pair_(`https://${AUTH0_DOMAIN}/userinfo`, {
			headers: {
				'Content-Type': 'application/json',
				authorization
			}
		}))
}
export {
	auth0__userinfo__fetch_get as get_auth0_userinfo,
}
