import { _b } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'close_auth0'
export const close_auth0_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const auth0_opened = auth0_opened_b(ctx)
	return close_auth0 as close_auth0_T
	function close_auth0() {
		auth0_opened.set(false)
	}
})
export type close_auth0_T = ()=>void
