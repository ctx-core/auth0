import type { error_ctx_type } from '@ctx-core/error'
import type { $auth0_token_type } from './auth0_token_b'
export interface auth0_error_ctx_type extends error_ctx_type {
	auth0_token: $auth0_token_type
}