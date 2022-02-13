import { bad_gateway_error_, throw_error } from '@ctx-core/error'
import { http_auth0_error_ } from './http_auth0_error_.js'
export function throw_bad_gateway_auth0(error_ctx) {
	throw_error(http_auth0_error_(bad_gateway_error_(error_ctx)))
}
