import type { BadGatewayError, error_o_T } from '@ctx-core/error'
import type { Auth0Error } from 'auth0-js'
export declare function auth0__bad_gateway__throw(error_o?:error_o_T):void
export declare function auth0__bad_gateway_error_(error_o?:error_o_T):Auth0Error&BadGatewayError
export {
	auth0__bad_gateway__throw as throw_bad_gateway_auth0,
	auth0__bad_gateway_error_ as bad_gateway_auth0_error_,
}
