import type { error_ctx_type } from '@ctx-core/error'
export interface auth0_error_ctx_interface {
	auth0_token: string
}
export type auth0_error_ctx_type =
	error_ctx_type
	& auth0_error_ctx_interface
