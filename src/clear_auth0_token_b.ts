import type { falsy } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { set_auth0_token_b, set_auth0_token_ctx_I } from './set_auth0_token_b'
const key = 'clear_auth0_token'
export interface clear_auth0_token_ctx_I extends set_auth0_token_ctx_I {
	clear_auth0_token?:clear_auth0_token_T
}
export const clear_auth0_token_b = _b<clear_auth0_token_ctx_I, typeof key>(key, ctx=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return clear_auth0_token as clear_auth0_token_T
	function clear_auth0_token(value:falsy = null) {
		set_auth0_token(value)
	}
})
export type clear_auth0_token_T = (value?:falsy)=>void
