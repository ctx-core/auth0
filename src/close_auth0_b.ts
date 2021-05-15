import { _b, B } from '@ctx-core/object'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
export const close_auth0_b:close_auth0_b_T = _b('close_auth0', (
	ctx:close_auth0_ctx_I
)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return close_auth0 as close_auth0_T
	function close_auth0() {
		auth0_opened.set(false)
	}
})
export interface close_auth0_ctx_I extends auth0_opened_ctx_I {
	close_auth0?:close_auth0_T
}
export type close_auth0_T = ()=>void
export interface close_auth0_b_T extends B<close_auth0_T> {}
