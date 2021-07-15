import { B, be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b.js'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'close_auth0'
export const close_auth0_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return close_auth0 as close_auth0_T
	function close_auth0() {
		auth0_opened$._ = null
	}
})
export type close_auth0_T = ()=>void
