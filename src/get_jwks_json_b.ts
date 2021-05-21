import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b'
const key = 'get_jwks_json'
export interface get_jwks_json_ctx_I
	extends AUTH0_DOMAIN_ctx_I {
	get_jwks_json?:get_jwks_json_T
}
export const get_jwks_json_b = _b<get_jwks_json_ctx_I, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return get_jwks_json as get_jwks_json_T
	async function get_jwks_json() {
		return fetch(`https://${get(AUTH0_DOMAIN)}/.well-known/jwks.json`)
	}
})
export type get_jwks_json_T = ()=>Promise<Response>
