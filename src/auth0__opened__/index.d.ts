import type { nullish } from '@ctx-core/function'
import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const auth0__opened__:Be<WritableAtom_<auth0_opened_T>>
export type auth0_opened_T = string|nullish
export declare function auth0__change_password__open(ctx:Ctx):void
export {
	auth0__opened__ as auth0_opened__,
	auth0__opened__ as auth0_opened$_,
	auth0__change_password__open as open_auth0_change_password,
}
