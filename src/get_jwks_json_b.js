import { fetch } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'get_jwks_json'
/** @type {import('./get_jwks_json_b.d.ts').get_jwks_json_b} */
export const get_jwks_json_b = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return get_jwks_json
	async function get_jwks_json() {
		const res = await fetch(`https://${AUTH0_DOMAIN$.$}/.well-known/jwks.json`)
		return [await res.json, res]
	}
})
