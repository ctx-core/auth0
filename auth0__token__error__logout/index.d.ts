import type { TokenResponse } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { ctx_T } from 'ctx-core/be'
import type { BadCredentialsError } from 'ctx-core/error'
export declare function auth0__token__error__logout(
	ctx:ctx_T,
	error:Auth0Error|BadCredentialsError|TokenResponse|auth0__token__error__logout__param_T
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
