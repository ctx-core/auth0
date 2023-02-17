import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { header__access_token__verify } from '../header__access_token__verify/index.js'
/** @typedef {import('./index.d.ts').auth0__userinfo__fetch_get__payload_T}auth0__userinfo__fetch_get__payload_T */
/**
 * @param params{import('./index.d.ts').auth0__userinfo__fetch_get__params_T}
 * @returns {Promise<[auth0__userinfo__fetch_get__payload_T,Response]>}
 */
export async function auth0__userinfo__fetch_get(params) {
	const { auth0__token, AUTH0_DOMAIN, } = params
	const authorization = header__access_token__verify(auth0__token)
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
