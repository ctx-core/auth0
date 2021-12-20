import { B, be_, assign } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { auth0_token$_b } from './auth0_token$_b.js'
const key = 'auth0_logout_msg$'
export const auth0_logout_msg$_b:B<auth0_logout_msg$_T> = be_(key, ctx=>{
	const auth0_logout_msg$ = atom$(undefined) as auth0_logout_msg$_T
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
export interface auth0_logout_msg$_T extends WritableAtom$<auth0_logout_msg_T|undefined> {
	auth0_logout():void
}
export {
	auth0_logout_msg$_b as b__msg__auth0_logout,
}
