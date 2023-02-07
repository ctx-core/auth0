import { fetch_response_pair_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
/** @typedef {import('./index.d.ts').jwks_json_T}.jwks_json_T */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {Promise<[jwks_json_T, Response]>}
 */
export async function jwks__json__fetch_get(ctx) {
	const [body, response] =
		await fetch_response_pair_(`https://${AUTH0_DOMAIN__(ctx).$}/.well-known/jwks.json`)
	return [typeof body === 'string' ? JSON.parse(body) : body, response]
}
export {
	jwks__json__fetch_get as get_jwks_json,
}
