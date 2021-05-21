import { _b } from '@ctx-core/object'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
const key = 'open_auth0_signup'
export interface open_auth0_signup_ctx_I extends auth0_opened_ctx_I {
	open_auth0_signup?:open_auth0_signup_T
}
export const open_auth0_signup_b = _b<open_auth0_signup_ctx_I, typeof key>(key, ctx=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_signup as open_auth0_signup_T
	function open_auth0_signup() {
		auth0_opened.set('signup')
	}
})
export type open_auth0_signup_T = ()=>void
