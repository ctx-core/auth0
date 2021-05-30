import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'get_jwks_json'
export const get_jwks_json_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return get_jwks_json as get_jwks_json_T
	async function get_jwks_json() {
		return fetch(`https://${AUTH0_DOMAIN$._}/.well-known/jwks.json`)
	}
})
export type get_jwks_json_T = ()=>Promise<Response>
