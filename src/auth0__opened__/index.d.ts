import type { nullish } from '@ctx-core/function'
import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const auth0__opened__:Be<WritableAtom_<auth0__opened_T>>
export {
	auth0__opened__ as auth0_opened__,
	auth0__opened__ as auth0_opened$_,
}
export declare function auth0__opened_(ctx:Ctx):auth0__opened_T
export declare function auth0__opened__set(ctx:Ctx, auth0__opened:string):void
export declare function auth0__change_password__open(ctx:Ctx):void
export {
	auth0__change_password__open as open_auth0_change_password,
}
export declare type auth0__opened_T = string|nullish
export declare type auth0_opened_T = auth0__opened_T
