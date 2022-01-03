import { be_ } from '@ctx-core/object'
import { auth0_token_json$_b } from './auth0_token_json$_b.js'
const key = 'set_auth0_token'
/** @type {import('./set_auth0_token_b.d.ts').set_auth0_token_b} */
export const set_auth0_token_b = be_(key, (ctx)=>{
	const auth0_token_json$ = auth0_token_json$_b(ctx)
	return set_auth0_token
	function set_auth0_token(auth0_token) {
		auth0_token_json$.set(JSON.stringify(auth0_token))
	}
})
