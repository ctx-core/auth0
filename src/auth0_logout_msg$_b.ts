import { _b, assign } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import { auth0_token$_b } from './auth0_token$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_logout_msg$'
export const auth0_logout_msg$_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const auth0_logout_msg$ = writable$(undefined) as auth0_logout_msg$_T
	const { logout_auth0_token } = auth0_token$_b(ctx)
	return assign(auth0_logout_msg$, {
		auth0_logout,
	}) as auth0_logout_msg$_T
	function auth0_logout() {
		logout_auth0_token()
		auth0_logout_msg$.set({
			time: Date.now(),
		})
	}
})
export interface auth0_logout_msg_T {
	time:number
}
export interface auth0_logout_msg$_T extends Writable$<auth0_logout_msg_T|undefined> {
	auth0_logout():void
}
export {
	auth0_logout_msg$_b as b__msg__auth0_logout,
}
