import { fetch } from '@ctx-core/fetch'
import { B, be_ } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'get_jwks_json'
export const get_jwks_json_b:B<get_jwks_json_T> = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return get_jwks_json as get_jwks_json_T
	async function get_jwks_json() {
		return fetch(`https://${AUTH0_DOMAIN$.$}/.well-known/jwks.json`)
	}
})
export type get_jwks_json_T = ()=>Promise<Response>
