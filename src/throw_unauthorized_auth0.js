import { throw_error, unauthorized_error_ } from '@ctx-core/error'
import { http_auth0_error_ } from './http_auth0_error_.js'
/**
 * @param {import('@ctx-core/error').error_ctx_I}[error_ctx]
 */
export function throw_unauthorized_auth0(error_ctx = {}) {
	throw_error(unauthorized_auth0_error_(error_ctx))
}
/**
 * @param {import('@ctx-core/error').error_ctx_I}[error_ctx]
 * @return {import('auth0-js').Auth0Error&import('@ctx-core/error').UnauthorizedError}
 */
export function unauthorized_auth0_error_(error_ctx = {}) {
	return http_auth0_error_(unauthorized_error_(error_ctx))
}
