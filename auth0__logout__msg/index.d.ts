import type { ctx_T } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	auth0__logout__msg$_,
	auth0__logout__msg_,
	auth0__logout__msg__set,
]:be_sig_triple_T<auth0__logout__msg_T>
export {
	auth0__logout__msg$_ as auth0__logout__msg__,
	auth0__logout__msg$_ as auth0_logout_msg__,
	auth0__logout__msg$_ as auth0_logout_msg$_,
}
export declare function auth0__logout(
	ctx:ctx_T
):void
export {
	auth0__logout as auth0_logout,
}
export interface auth0__logout__msg_T {
	time:number
}
export declare type auth0_logout_msg_T = auth0__logout__msg_T
