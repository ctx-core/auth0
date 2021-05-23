import { _b } from '@ctx-core/object'
import { auth0_opened_b} from './auth0_opened_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'open_auth0_signup'
export const open_auth0_signup_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const auth0_opened = auth0_opened_b(ctx)
	return open_auth0_signup as open_auth0_signup_T
	function open_auth0_signup() {
		auth0_opened.set('signup')
	}
})
export type open_auth0_signup_T = ()=>void
