import { _b } from '@ctx-core/object'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
const key = 'open_auth0_login'
export interface open_auth0_login_I extends auth0_opened_ctx_I {
	open_auth0_login?:open_auth0_login_T
}
export const open_auth0_login_b = _b<open_auth0_login_I, typeof key>(key, ctx=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_login as open_auth0_login_T
	function open_auth0_login() {
		auth0_opened.set('login')
	}
})
export type open_auth0_login_T = ()=>void
