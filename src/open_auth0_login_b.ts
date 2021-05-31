import { be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'open_auth0_login'
export const open_auth0_login_b = be_<auth0_Ctx, typeof key>(key, ctx=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return open_auth0_login as open_auth0_login_T
	function open_auth0_login() {
		auth0_opened$._ = 'login'
	}
})
export type open_auth0_login_T = ()=>void
