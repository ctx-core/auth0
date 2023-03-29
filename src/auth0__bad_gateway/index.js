import { bad_gateway_error_, error_o__throw } from '@ctx-core/error'
/** @typedef {import('@ctx-core/error').argument__error_o_T}argument__error_o_T */
/** @typedef {import('@ctx-core/error').BadGatewayError}BadGatewayError */
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
	error_o__throw(auth0__bad_gateway_error_(message, error_o))
}
export {
	auth0__bad_gateway__throw as throw_bad_gateway_auth0,
}
