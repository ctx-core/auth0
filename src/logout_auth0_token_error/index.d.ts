import { type Ctx } from '@ctx-core/object'
import { type Auth0Error } from 'auth0-js'
export declare function logout_auth0_token_error(
	ctx:Ctx, error:Auth0Error|logout_auth0_token_error_param_T|null
):void
export declare type logout_auth0_token_error_T = typeof logout_auth0_token_error
export interface logout_auth0_token_error_param_T {
	email?:string
	password?:string
	password_confirmation?:string
	username?:string
}
