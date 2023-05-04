import { be_computed_pair_ } from '@ctx-core/nanostores'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN__/index.js'
/** @typedef {import('./index.d.ts').jwks_json_T}.jwks_json_T */
export const [
	jwks__json__GET__fetch,
	jwks__json__GET__fetch2,
] = be_computed_pair_(
	/**
	 * @param {Ctx}ctx
	 * @returns {Promise<Response>}
	 */
	ctx=>
		fetch(
			`https://${AUTH0_DOMAIN_(ctx)}/.well-known/jwks.json`)
)
export {
	jwks__json__GET__fetch2 as get_jwks_json,
}
