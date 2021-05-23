import type { falsy } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { auth0_token_json_b } from './auth0_token_json_b'
import type { $auth0_token_T } from './auth0_token_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'set_auth0_token'
export const set_auth0_token_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const auth0_token_json = auth0_token_json_b(ctx)
	return set_auth0_token as set_auth0_token_T
	function set_auth0_token(auth0_token:$auth0_token_T|falsy) {
		auth0_token_json.set(JSON.stringify(auth0_token))
	}
})
export type set_auth0_token_T = (auth0_token:$auth0_token_T|falsy)=>void
