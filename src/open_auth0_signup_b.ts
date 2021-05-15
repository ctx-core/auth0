import { _b, B } from '@ctx-core/object'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
export const open_auth0_signup_b:open_auth0_signup_b_T = _b('open_auth0_signup', (
	ctx:open_auth0_signup_ctx_I
)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_signup as open_auth0_signup_T
	function open_auth0_signup() {
		auth0_opened.set('signup')
	}
})
export interface open_auth0_signup_ctx_I extends auth0_opened_ctx_I {
	open_auth0_signup?:open_auth0_signup_T
}
export type open_auth0_signup_T = ()=>void
export interface open_auth0_signup_b_T extends B<open_auth0_signup_T> {}
