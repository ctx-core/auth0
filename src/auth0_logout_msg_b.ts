import { _b, assign } from '@ctx-core/object'
import type { maybe } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
import { auth0_token_b, auth0_token_Ctx } from './auth0_token_b'
const key = 'auth0_logout_msg'
export interface auth0_logout_msg_Ctx
	extends auth0_token_Ctx {
	auth0_logout_msg?:auth0_logout_msg_T
}
export const auth0_logout_msg_b = _b<auth0_logout_msg_Ctx, typeof key>(key, ctx=>{
	const auth0_logout_msg = writable(null) as auth0_logout_msg_T
	const { logout_auth0_token } = auth0_token_b(ctx)
	return assign(auth0_logout_msg, {
		auth0_logout,
	}) as auth0_logout_msg_T
	function auth0_logout() {
		logout_auth0_token()
		auth0_logout_msg.set({
			time: Date.now(),
		})
	}
})
export interface $auth0_logout_msg_T {
	time:number
}
export interface auth0_logout_msg_T extends Writable<maybe<$auth0_logout_msg_T>> {
	auth0_logout():void
}
export {
	auth0_logout_msg_b as b__msg__auth0_logout,
}
