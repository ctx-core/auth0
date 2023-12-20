import type { Ctx } from 'ctx-core/be'
import type { nullish } from 'ctx-core/function'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	auth0__opened$_,
	auth0__opened_,
	auth0__opened__set,
]:be_sig_triple_T<auth0__opened_T>
export {
	auth0__opened$_ as auth0__opened__,
	auth0__opened$_ as auth0_opened__,
	auth0__opened$_ as auth0_opened$_,
}
export declare function auth0__change_password__open(ctx:Ctx):void
export {
	auth0__change_password__open as open_auth0_change_password,
}
export declare type auth0__opened_T = string|nullish
export declare type auth0_opened_T = auth0__opened_T
