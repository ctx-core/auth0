import { fetch } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN$_ } from './AUTH0_DOMAIN$_.js'
/** @typedef {import('./get_jwks_json.d.ts').jwks_json_T}.jwks_json_T */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {Promise<[jwks_json_T, Response]>}
 */
export async function get_jwks_json(ctx) {
	const res = await fetch(`https://${AUTH0_DOMAIN$_(ctx).$}/.well-known/jwks.json`)
	/** @type {jwks_json_T} */
	const jwks_json = await res.json()
	return [jwks_json, res]
}
