import { unauthorized_error_ } from '@ctx-core/error'
/** @typedef {import('./index.d.ts').argument__auth0__unauthorized__error_o_T}argument__auth0__unauthorized__error_o_T */
/** @typedef {import('./index.d.ts').auth0__unauthorized__error_o_error_T}auth0__unauthorized__error_o_error_T */
/**
 * @param {string}[message]
 * @param {argument__auth0__unauthorized__error_o_T}[error_o]
 * @return {auth0__unauthorized__error_o_error_T}
 */
export function auth0__unauthorized__error_(
	message,
	error_o
) {
	return (
		/**
		 *  @type {auth0__unauthorized__error_o_error_T}
		 */
		unauthorized_error_(message, error_o)
	)
}
export {
	auth0__unauthorized__error_ as unauthorized_auth0_error_,
}
/**
 * @param {string}[message]
 * @param {argument__auth0__unauthorized__error_o_T}[error_o]
 */
export function auth0__unauthorized__throw(
	message,
	error_o
) {
	throw auth0__unauthorized__error_(
		message,
		error_o)
}
export {
	auth0__unauthorized__throw as throw_unauthorized_auth0,
}
