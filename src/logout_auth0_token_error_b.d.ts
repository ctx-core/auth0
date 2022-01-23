import { B } from '@ctx-core/object'
import type { Auth0Error } from 'auth0-js'
export declare const logout_auth0_token_error_b:B<logout_auth0_token_error_T>
export declare type logout_auth0_token_error_T =
	(error:Auth0Error|logout_auth0_token_error_param_T|null)=>void;
export interface logout_auth0_token_error_param_T {
	email?:string
	password?:string
	password_confirmation?:string
	username?:string
}
