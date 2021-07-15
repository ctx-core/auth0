import type { nullish } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { set_auth0_token_b } from './set_auth0_token_b.js'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'clear_auth0_token'
export const clear_auth0_token_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return clear_auth0_token as clear_auth0_token_T
	function clear_auth0_token(value:nullish = null) {
		set_auth0_token(value)
	}
})
export type clear_auth0_token_T = (value?:nullish)=>void
