import { _b, B } from '@ctx-core/object'
import { auth0_token_json_b } from './auth0_token_json_b'
import type { $auth0_token_type } from './auth0_token_b'
import type { falsy } from '@ctx-core/function'
export const set_auth0_token_b:set_auth0_token_b_type = _b('set_auth0_token', (ctx)=>{
	const auth0_token_json = auth0_token_json_b(ctx)
	return set_auth0_token as set_auth0_token_type
	function set_auth0_token(auth0_token:$auth0_token_type|falsy) {
		auth0_token_json.set(JSON.stringify(auth0_token))
	}
})
export type set_auth0_token_type = (auth0_token:$auth0_token_type|falsy)=>void
export interface set_auth0_token_b_type extends B<set_auth0_token_type> {}
