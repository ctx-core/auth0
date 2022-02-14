import { bad_gateway_error_, throw_error } from '@ctx-core/error'
import { http_auth0_error_ } from './http_auth0_error_.js'
/**
 * @param {import('@ctx-core/error').error_ctx_I}[error_ctx]
 */
export function throw_bad_gateway_auth0(error_ctx = {}) {
	throw_error(bad_gateway_auth0_error_(error_ctx))
}
/**
 * @param {import('@ctx-core/error').error_ctx_I}[error_ctx]
 * @return {import('auth0-js').Auth0Error&import('@ctx-core/error').BadGatewayError}
 */
export function bad_gateway_auth0_error_(error_ctx = {}) {
	return http_auth0_error_(bad_gateway_error_(error_ctx))
}
