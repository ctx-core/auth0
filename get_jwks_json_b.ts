import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
export const get_jwks_json_b = _b(
	'get_jwks_json', (ctx)=>{
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return async function get_jwks_json() {
			return fetch(`https://${get(AUTH0_DOMAIN)}/.well-known/jwks.json`)
		}
	})
