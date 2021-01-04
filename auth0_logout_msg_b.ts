import { _b, assign, B } from '@ctx-core/object'
import type { maybe } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
import { auth0_token_b } from './auth0_token_b'
export const auth0_logout_msg_b:auth0_logout_msg_b_type = _b('auth0_logout_msg', ctx=>{
	const auth0_logout_msg = writable(null) as auth0_logout_msg_type
	const { logout_auth0_token } = auth0_token_b(ctx)
	return assign(auth0_logout_msg, {
		auth0_logout,
	}) as auth0_logout_msg_type
	function auth0_logout() {
		logout_auth0_token()
		auth0_logout_msg.set({
			time: Date.now(),
		})
	}
})
export interface $auth0_logout_msg_type {
	time:number
}
export interface auth0_logout_msg_type extends Writable<maybe<$auth0_logout_msg_type>> {
	auth0_logout():void
}
export interface auth0_logout_msg_b_type extends B<auth0_logout_msg_type> {}
export {
	auth0_logout_msg_type as type__msg__auth0_logout,
	auth0_logout_msg_b as b__msg__auth0_logout,
}
