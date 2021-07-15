import type { falsy } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { auth0_token_json$_b } from './auth0_token_json$_b.js'
import type { auth0_token_T } from './auth0_token$_b.js'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'set_auth0_token'
export const set_auth0_token_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const auth0_token_json$ = auth0_token_json$_b(ctx)
	return set_auth0_token as set_auth0_token_T
	function set_auth0_token(auth0_token:auth0_token_T|falsy) {
		auth0_token_json$.set(JSON.stringify(auth0_token))
	}
})
export type set_auth0_token_T = (auth0_token:auth0_token_T|falsy)=>void
