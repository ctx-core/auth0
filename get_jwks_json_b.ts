import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
export const get_jwks_json_b:get_jwks_json_b_type = _b('get_jwks_json', (ctx)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return get_jwks_json as get_jwks_json_type
	async function get_jwks_json() {
		return fetch(`https://${get(AUTH0_DOMAIN)}/.well-known/jwks.json`)
	}
})
export type get_jwks_json_type = ()=>Promise<Response>
export interface get_jwks_json_b_type extends B<get_jwks_json_type> {}
