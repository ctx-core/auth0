import { _b, B } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
export const open_auth0_login_b:open_auth0_login_b_type = _b('open_auth0_login', (ctx)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_login as open_auth0_login_type
	function open_auth0_login() {
		auth0_opened.set('login')
	}
})
export type open_auth0_login_type = ()=>void
export interface open_auth0_login_b_type extends B<open_auth0_login_type> {}
