import type { Ctx } from '@ctx-core/object'
import type { Auth0Error } from 'auth0-js'
export declare function auth0__token__error__logout(
	ctx:Ctx, error:Auth0Error|auth0__token__error__logout__param_T
):void
export {
	auth0__token__error__logout as logout_auth0_token_error,
}
export declare type auth0__token__error__logout_T = typeof auth0__token__error__logout
export declare type logout_auth0_token_error_T = auth0__token__error__logout_T
export interface auth0__token__error__logout__param_T {
	email?:string
	password?:string
	password_confirmation?:string
	username?:string
}
export declare type logout_auth0_token_error_param_T = auth0__token__error__logout__param_T
