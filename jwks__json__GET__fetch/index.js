import { fetch__template_pair__new } from 'ctx-core/fetch'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN/index.js'
/** @typedef {import('./index.d.ts').jwks_json_T} */
export const [
	jwks__json__GET__fetch,
	jwks__json__GET__fetch2,
] = fetch__template_pair__new(
	/**
	 * @param {ctx_T}ctx
	 * @returns {Promise<Response>}
	 */
	ctx=>
		fetch(
			`https://${AUTH0_DOMAIN_(ctx)}/.well-known/jwks.json`)
)
export {
	jwks__json__GET__fetch2 as jwks__json__fetch_get,
	jwks__json__GET__fetch2 as get_jwks_json,
}
