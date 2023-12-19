/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { fetch__template_pair__new } from '@ctx-core/fetch-undici'
import { is_ctx_ } from 'ctx-core/be'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN/index.js'
import { header__access_token__verify } from '../header__access_token__verify/index.js'
/** @typedef {Ctx} */
/** @typedef {auth0__userinfo__GET__fetch2__params_T} */
/** @typedef {auth0__userinfo__GET__fetch2__payload_T} */
export const [
	auth0__userinfo__GET__fetch,
	auth0__userinfo__GET__fetch2,
] = fetch__template_pair__new(
	/**
	 * @param {auth0__userinfo__GET__fetch2__params_T|Ctx}ctx_OR_params
	 * @param {auth0__userinfo__GET__fetch2__params_T}[params]
	 * @returns {Promise<Response>}
	 */
	(ctx_OR_params, params)=>{
		/** @type {Ctx} */
		let ctx
		if (is_ctx_(ctx_OR_params)) {
			ctx = /** @type {Ctx} */ctx_OR_params
		} else {
			params = ctx_OR_params
		}
		const { auth0__token } = params
		const AUTH0_DOMAIN =
			params.AUTH0_DOMAIN
			|| (ctx ? AUTH0_DOMAIN_(ctx) : null)
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
