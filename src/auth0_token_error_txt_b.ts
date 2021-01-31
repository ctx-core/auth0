import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_error_b } from './auth0_token_error_b'
export const auth0_token_error_txt_b:auth0_token_error_txt_b_type = _b('auth0_token_error_txt', ctx=>
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
export type $auth0_token_error_txt_type = string
export interface auth0_token_error_txt_type extends Readable<$auth0_token_error_txt_type> {}
export interface auth0_token_error_txt_b_type extends B<auth0_token_error_txt_type> {}
export {
	auth0_token_error_txt_b as b__txt__error__token__auth0,
}
