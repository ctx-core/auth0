import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_error_b, auth0_token_error_Ctx } from './auth0_token_error_b'
const key = 'auth0_token_error_txt'
export interface auth0_token_error_txt_Ctx
	extends auth0_token_error_Ctx {
	auth0_token_error_txt?:auth0_token_error_txt_T
}
export const auth0_token_error_txt_b = _b<auth0_token_error_txt_Ctx, typeof key>(key, ctx=>
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
export type $auth0_token_error_txt_T = string
export interface auth0_token_error_txt_T extends Readable<$auth0_token_error_txt_T> {}
export {
	auth0_token_error_txt_b as b__txt__error__token__auth0,
}
