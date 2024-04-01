import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__token__error_ } from '../auth0__token__error/index.js'
export const [
	auth0__token__error_txt$_,
	auth0__token__error_txt_,
] = id_be_memo_pair_(
	'auth0__token__error_txt',
	ctx=>{
		const auth0__token__error = auth0__token__error_(ctx)
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
	})
export {
	auth0__token__error_txt$_ as auth0__token__error_txt__,
	auth0__token__error_txt$_ as auth0_token_error_txt__,
	auth0__token__error_txt$_ as auth0_token_error_txt$_,
}
