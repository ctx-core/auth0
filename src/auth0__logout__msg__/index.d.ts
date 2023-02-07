import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const auth0__logout__msg__:Be<WritableAtom_<auth0_logout_msg_T>>
export interface auth0_logout_msg_T {
	time:number
}
export declare function auth0__logout(ctx:Ctx):void
export {
	auth0__logout__msg__ as auth0_logout_msg__,
	auth0__logout__msg__ as auth0_logout_msg$_,
	auth0__logout as auth0_logout,
}
