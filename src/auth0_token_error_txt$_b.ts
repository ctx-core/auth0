import { be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_token_error$_b } from './auth0_token_error$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_token_error_txt$'
export const auth0_token_error_txt$_b = be_<auth0_Ctx, typeof key>(key, ctx=>
	derived$(
		auth0_token_error$_b(ctx),
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
export type auth0_token_error_txt_T = string
export interface auth0_token_error_txt$_T extends Readable$<auth0_token_error_txt_T> {}
export {
	auth0_token_error_txt$_b as b__txt__error__token__auth0,
}
