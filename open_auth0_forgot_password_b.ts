import { _b, B } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
export const open_auth0_forgot_password_b:open_auth0_forgot_password_b_type = _b('open_auth0_forgot_password', (ctx)=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_forgot_password as open_auth0_forgot_password_type
	function open_auth0_forgot_password() {
		auth0_opened.set('forgot_password')
	}
})
export type open_auth0_forgot_password_type = ()=>void
export interface open_auth0_forgot_password_b_type extends B<open_auth0_forgot_password_type> {}
