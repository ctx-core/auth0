import { _b, B } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
export const close_auth0_b:close_auth0_b_type = _b('close_auth0', (ctx)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return close_auth0 as close_auth0_type
	function close_auth0() {
		auth0_opened.set(false)
	}
})
export type close_auth0_type = ()=>void
export interface close_auth0_b_type extends B<close_auth0_type> {}
