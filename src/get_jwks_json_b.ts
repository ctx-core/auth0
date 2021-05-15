import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b'
export const get_jwks_json_b:get_jwks_json_b_T = _b('get_jwks_json', (
	ctx:get_jwks_json_ctx_I
)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return get_jwks_json as get_jwks_json_T
	async function get_jwks_json() {
		return fetch(`https://${get(AUTH0_DOMAIN)}/.well-known/jwks.json`)
	}
})
export interface get_jwks_json_ctx_I extends AUTH0_DOMAIN_ctx_I {
	get_jwks_json?:get_jwks_json_T
}
export type get_jwks_json_T = ()=>Promise<Response>
export interface get_jwks_json_b_T extends B<get_jwks_json_T> {}
