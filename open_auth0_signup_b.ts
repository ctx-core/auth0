import { _b, B } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
export const open_auth0_signup_b:open_auth0_signup_b_type = _b('open_auth0_signup', (ctx)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_signup as open_auth0_signup_type
	function open_auth0_signup() {
		auth0_opened.set('signup')
	}
})
export type open_auth0_signup_type = ()=>void
export interface open_auth0_signup_b_type extends B<open_auth0_signup_type> {}
