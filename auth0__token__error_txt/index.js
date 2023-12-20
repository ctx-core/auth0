import { be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__token__error_ } from '../auth0__token__error/index.js'
export const [
	auth0__token__error_txt$_,
	auth0__token__error_txt_,
] = be_memo_pair_(ctx=>{
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
}, { id: 'auth0__token__error_txt' })
export {
	auth0__token__error_txt$_ as auth0__token__error_txt__,
	auth0__token__error_txt$_ as auth0_token_error_txt__,
	auth0__token__error_txt$_ as auth0_token_error_txt$_,
}
