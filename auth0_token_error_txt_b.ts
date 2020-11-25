import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { auth0_token_error_b } from './auth0_token_error_b'
export const auth0_token_error_txt_b = _b('auth0_token_error_txt', ctx=>
	derived(
		auth0_token_error_b(ctx),
		error__token__auth0=>
			error__token__auth0
			? error__token__auth0.error_message || error__token__auth0.message
				? error__token__auth0.error_message || error__token__auth0.message
				: error__token__auth0.error_description
					? error__token__auth0.error_description
					: error__token__auth0.error
						? error__token__auth0.error
						: ''
			: ''))
export {
	auth0_token_error_txt_b as b__txt__error__token__auth0,
}
