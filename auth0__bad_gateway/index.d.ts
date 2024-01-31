import type { Auth0Error } from 'auth0-js'
import type { argument__error_o_T, BadGatewayError } from 'ctx-core/error'
export declare function auth0__bad_gateway_error_(
	message?:string,
	error_o?:argument__error_o_T
):Auth0Error&BadGatewayError
export {
	auth0__bad_gateway_error_ as bad_gateway_auth0_error_
}
export declare function auth0__bad_gateway__throw(
	message?:string,
	error_o?:argument__error_o_T
):void
export {
	auth0__bad_gateway__throw as throw_bad_gateway_auth0
}
