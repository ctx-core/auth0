import { be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__token__error$_ } from '../auth0__token__error/index.js'
export const [
	auth0__token__error_txt$_,
	auth0__token__error_txt_,
] = be_computed_pair_(ctx=>auth0__token__error$_(ctx),
	auth0__token__error=>{
		return (
			auth0__token__error
				? auth0__token__error.error_message || auth0__token__error.message
					? auth0__token__error.error_message || auth0__token__error.message
					: auth0__token__error.error_description
						? auth0__token__error.error_description
						: auth0__token__error.error
							? auth0__token__error.error
							: ''
				: '')
	}, { id: 'auth0__token__error_txt' })
export {
	auth0__token__error_txt$_ as auth0__token__error_txt__,
	auth0__token__error_txt$_ as auth0_token_error_txt__,
	auth0__token__error_txt$_ as auth0_token_error_txt$_,
}
