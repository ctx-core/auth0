import type { BadGatewayError, error_ctx_I } from '@ctx-core/error'
import type { Auth0Error } from 'auth0-js'
export declare function throw_bad_gateway_auth0(error_ctx?:error_ctx_I):void
export declare function bad_gateway_auth0_error_(error_ctx?:error_ctx_I):Auth0Error&BadGatewayError
