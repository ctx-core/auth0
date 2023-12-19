import type { be_atom_triple_T } from '@ctx-core/nanostores'
import type { Ctx } from 'ctx-core/be'
export declare const [
	auth0__logout__msg$_,
	auth0__logout__msg_,
	auth0__logout__msg__set,
]:be_atom_triple_T<auth0__logout__msg_T>
export {
	auth0__logout__msg$_ as auth0__logout__msg__,
	auth0__logout__msg$_ as auth0_logout_msg__,
	auth0__logout__msg$_ as auth0_logout_msg$_,
}
export declare function auth0__logout(
	ctx:Ctx
):void
export {
	auth0__logout as auth0_logout,
}
export interface auth0__logout__msg_T {
	time:number
}
export declare type auth0_logout_msg_T = auth0__logout__msg_T
