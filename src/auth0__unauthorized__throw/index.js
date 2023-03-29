import { error_o__throw, unauthorized_error_ } from '@ctx-core/error'
import { auth0__http__error_ } from '../auth0__http__error_/index.js'
/**
 * @param {import('@ctx-core/error').error_o_T}[error_o]
 */
export function auth0__unauthorized__throw(error_o = {}) {
	error_o__throw(auth0__unauthorized__error_(error_o))
}
export {
	auth0__unauthorized__throw as throw_unauthorized_auth0,
}
/**
 * @param {import('@ctx-core/error').error_o_T}[error_o]
 * @return {import('auth0-js').Auth0Error&import('@ctx-core/error').UnauthorizedError}
 */
export function auth0__unauthorized__error_(error_o = {}) {
	return auth0__http__error_(unauthorized_error_(error_o))
}
export {
	auth0__unauthorized__error_ as unauthorized_auth0_error_,
}
