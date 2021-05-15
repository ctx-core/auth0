import { _b, B } from '@ctx-core/object'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
export const open_auth0_login_b:open_auth0_login_b_T = _b('open_auth0_login', (
	ctx:open_auth0_login_I
)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_login as open_auth0_login_T
	function open_auth0_login() {
		auth0_opened.set('login')
	}
})
export interface open_auth0_login_I extends auth0_opened_ctx_I {
	open_auth0_login?:open_auth0_login_T
}
export type open_auth0_login_T = ()=>void
export interface open_auth0_login_b_T extends B<open_auth0_login_T> {}
