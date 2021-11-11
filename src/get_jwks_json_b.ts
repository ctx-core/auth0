import { B, be_ } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
import type { auth0_Ctx } from './auth0_Ctx.js'
const key = 'get_jwks_json'
export const get_jwks_json_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return get_jwks_json as get_jwks_json_T
	async function get_jwks_json() {
		return fetch(`https://${AUTH0_DOMAIN$.$}/.well-known/jwks.json`)
	}
})
export type get_jwks_json_T = ()=>Promise<Response>
