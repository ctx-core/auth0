import { _b } from '@ctx-core/object'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
const key = 'open_auth0_forgot_password'
export interface open_auth0_forgot_password_ctx_I extends auth0_opened_ctx_I {
	open_auth0_forgot_password?:open_auth0_forgot_password_T
}
export const open_auth0_forgot_password_b = _b<open_auth0_forgot_password_ctx_I, typeof key>(key, ctx=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_forgot_password as open_auth0_forgot_password_T
	function open_auth0_forgot_password() {
		auth0_opened.set('forgot_password')
	}
})
export type open_auth0_forgot_password_T = ()=>void
