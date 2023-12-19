/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { bad_gateway_error_ } from 'ctx-core/error'
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 * @return {BadGatewayError}
 */
export function auth0__bad_gateway_error_(
	message,
	error_o
) {
	return bad_gateway_error_(message, error_o)
}
export {
	auth0__bad_gateway_error_ as bad_gateway_auth0_error_,
}
/**
 * @param {string}[message]
 * @param {argument__error_o_T}[error_o]
 */
export function auth0__bad_gateway__throw(
	message,
	error_o
) {
	throw auth0__bad_gateway_error_(message, error_o)
}
export {
	auth0__bad_gateway__throw as throw_bad_gateway_auth0,
}
