import { _b } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'open_auth0_forgot_password'
export const open_auth0_forgot_password_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_forgot_password as open_auth0_forgot_password_T
	function open_auth0_forgot_password() {
		auth0_opened.set('forgot_password')
	}
})
export type open_auth0_forgot_password_T = ()=>void
