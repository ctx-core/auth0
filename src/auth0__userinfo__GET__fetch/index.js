import { fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { header__access_token__verify } from '../header__access_token__verify/index.js'
/** @typedef {import('./index.d.ts').auth0__userinfo__fetch_get__params_T}auth0__userinfo__fetch_get__params_T */
/** @typedef {import('./index.d.ts').auth0__userinfo__fetch_get__payload_T}auth0__userinfo__fetch_get__payload_T */
export const [
	auth0__userinfo__GET__fetch,
	auth0__userinfo__GET__fetch2,
] = fetch__template_pair_(
	/**
	 * @param {auth0__userinfo__fetch_get__params_T}params
	 * @returns {Promise<Response>}
	 */
	async params=>{
		const { auth0__token, AUTH0_DOMAIN, } = params
		const authorization = header__access_token__verify(auth0__token)
		return (
			fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
				headers: {
					'Content-Type': 'application/json',
					authorization
				}
			}))
	}
)
export {
	auth0__userinfo__GET__fetch2 as auth0__userinfo__fetch_get,
	auth0__userinfo__GET__fetch2 as get_auth0_userinfo,
}
