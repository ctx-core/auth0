import type { argument__error_o_T, error_o_T, UnauthorizedError } from '@ctx-core/error'
import type { JwtToken } from '@ctx-core/jwt'
import type { Auth0Error } from 'auth0-js'
export declare function auth0__unauthorized__error_(
	message?:string,
	error_o?:argument__auth0__unauthorized__error_o_T
):auth0__unauthorized__error_o_error_T
export {
	auth0__unauthorized__throw as throw_unauthorized_auth0,
}
export declare function auth0__unauthorized__throw(
	message?:string,
	error_o?:argument__auth0__unauthorized__error_o_T
):void
export {
	auth0__unauthorized__error_ as unauthorized_auth0_error_,
}
export interface auth0__unauthorized__error_o_T extends error_o_T {
	auth0__token?:JwtToken
}
export interface argument__auth0__unauthorized__error_o_T
	extends auth0__unauthorized__error_o_T, argument__error_o_T {}
export type auth0__unauthorized__error_o_error_T = Auth0Error&UnauthorizedError
