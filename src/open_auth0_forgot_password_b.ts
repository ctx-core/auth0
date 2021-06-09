import { B, be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'open_auth0_forgot_password'
export const open_auth0_forgot_password_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return open_auth0_forgot_password as open_auth0_forgot_password_T
	function open_auth0_forgot_password() {
		auth0_opened$._ = 'forgot_password'
	}
})
export type open_auth0_forgot_password_T = ()=>void
