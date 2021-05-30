import type { error_ctx_I } from '@ctx-core/error'
import type { auth0_token_T } from './auth0_token$_b'
export interface auth0_error_ctx_I extends error_ctx_I {
	auth0_token: auth0_token_T
}
