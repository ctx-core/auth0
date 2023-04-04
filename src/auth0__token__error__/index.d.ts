import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { Auth0Error } from 'auth0-js'
export declare const auth0__token__error__:Be<WritableAtom_<auth0__token__error_T>>
export {
	auth0__token__error__ as auth0_token_error__,
	auth0__token__error__ as auth0_token_error$_,
}
export declare function auth0__token__error_(ctx:Ctx):auth0__token__error_T
export declare function auth0__token__error__set(
	ctx:Ctx,
	auth0__token__error:auth0__token__error_T
):void
export declare type auth0__token__error_T = Auth0Error&{
	username?:string
	password?:string
	password_confirmation?:string
}
export declare type auth0_token_error_T = auth0__token__error_T
