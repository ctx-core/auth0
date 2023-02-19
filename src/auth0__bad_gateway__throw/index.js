import { bad_gateway_error_, error__throw } from '@ctx-core/error'
import { auth0__http__error_ } from '../auth0__http__error_/index.js'
/**
 * @param {import('@ctx-core/error').error_o_T}[error_o]
 */
export function auth0__bad_gateway__throw(error_o = {}) {
	error__throw(auth0__bad_gateway_error_(error_o))
}
export {
	auth0__bad_gateway__throw as throw_bad_gateway_auth0,
}
/**
 * @param {import('@ctx-core/error').error_o_T}[error_o]
 * @return {import('auth0-js').Auth0Error&import('@ctx-core/error').BadGatewayError}
 */
export function auth0__bad_gateway_error_(error_o = {}) {
	return auth0__http__error_(bad_gateway_error_(error_o))
}
export {
	auth0__bad_gateway_error_ as bad_gateway_auth0_error_,
}
