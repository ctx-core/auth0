import { _b, assign } from '@ctx-core/object'
import type { maybe } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
import { auth0_token_b } from './auth0_token_b'
export function auth0_logout_msg_b(ctx?) {
	return _b<auth_logout_msg_type>('auth0_logout_msg', ctx=>{
		const __msg__logout__auth0 = writable(null) as auth_logout_msg_type
		const { logout_auth0_token } = auth0_token_b(ctx)
		return assign(__msg__logout__auth0, {
			logout__auth0,
		})
		function logout__auth0() {
			logout_auth0_token()
			__msg__logout__auth0.set({
				time: Date.now(),
			})
		}
	})(ctx)
}
export interface $type__msg__logout__auth0 {
	time:number
}
export interface auth0_logout_msg_interface {
	logout__auth0():void
}
export interface auth_logout_msg_type
	extends Writable<maybe<$type__msg__logout__auth0>>,
		auth0_logout_msg_interface {}
export {
	auth_logout_msg_type as type__msg__logout__auth0,
	auth0_logout_msg_b as b__msg__logout__auth0,
}
