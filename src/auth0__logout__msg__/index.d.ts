import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const auth0__logout__msg__:Be<WritableAtom_<auth0__logout__msg_T>>
export {
	auth0__logout__msg__ as auth0_logout_msg__,
	auth0__logout__msg__ as auth0_logout_msg$_,
}
export declare function auth0__logout__msg_(ctx:Ctx):auth0__logout__msg_T
export declare function auth0__logout(ctx:Ctx):void
export {
	auth0__logout as auth0_logout,
}
export interface auth0__logout__msg_T {
	time:number
}
export declare type auth0_logout_msg_T = auth0__logout__msg_T
