import { _b, B } from '@ctx-core/object'
import type { falsy } from '@ctx-core/function'
import { set_auth0_token_b, set_auth0_token_ctx_I } from './set_auth0_token_b'
export const clear_auth0_token_b:clear_auth0_token_b_type = _b('clear_auth0_token', (
	ctx:clear_auth0_token_ctx_I
)=>{
	const set_auth0_token = set_auth0_token_b(ctx)
	return clear_auth0_token as clear_auth0_token_T
	function clear_auth0_token(value:falsy = null) {
		set_auth0_token(value)
	}
})
export interface clear_auth0_token_ctx_I extends set_auth0_token_ctx_I {
	clear_auth0_token?:clear_auth0_token_T
}
export type clear_auth0_token_T = (value?:falsy)=>void
export interface clear_auth0_token_b_type extends B<clear_auth0_token_T> {}
