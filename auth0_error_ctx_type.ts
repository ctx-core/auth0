import type { error_ctx_type } from '@ctx-core/error'
export type auth0_error_ctx_type = error_ctx_type & {
	auth0_token: string
}
