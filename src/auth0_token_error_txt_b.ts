import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_error_b, auth0_token_error_ctx_I } from './auth0_token_error_b'
export const auth0_token_error_txt_b:auth0_token_error_txt_b_T = _b('auth0_token_error_txt', (
	ctx:auth0_token_error_txt_ctx_I
)=>
	derived(
		auth0_token_error_b(ctx),
		auth0_token_error=>
			auth0_token_error
			? auth0_token_error.error_message || auth0_token_error.message
				? auth0_token_error.error_message || auth0_token_error.message
				: auth0_token_error.error_description
					? auth0_token_error.error_description
					: auth0_token_error.error
						? auth0_token_error.error
						: ''
			: ''))
export interface auth0_token_error_txt_ctx_I extends auth0_token_error_ctx_I {
	auth0_token_error_txt?:auth0_token_error_txt_T
}
export type $auth0_token_error_txt_T = string
export interface auth0_token_error_txt_T extends Readable<$auth0_token_error_txt_T> {}
export interface auth0_token_error_txt_b_T extends B<auth0_token_error_txt_T> {}
export {
	auth0_token_error_txt_b as b__txt__error__token__auth0,
}
