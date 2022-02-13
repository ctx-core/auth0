import { throw_error, unauthorized_error_ } from '@ctx-core/error'
import { http_auth0_error_ } from './http_auth0_error_.js'
export function throw_unauthorized_auth0(error_ctx) {
  throw_error(http_auth0_error_(unauthorized_error_(error_ctx)))
}
