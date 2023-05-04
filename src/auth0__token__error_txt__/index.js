import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__token__error__ } from '../auth0__token__error__/index.js'
export const [
	auth0__token__error_txt__,
	auth0__token__error_txt_,
] = be_computed_pair_(ctx=>
	computed_(auth0__token__error__(ctx), $=>
		$
		? $.error_message || $.message
		  ? $.error_message || $.message
		  : $.error_description
		    ? $.error_description
		    : $.error
		      ? $.error
		      : ''
		: ''))
export {
	auth0__token__error_txt__ as auth0_token_error_txt__,
	auth0__token__error_txt__ as auth0_token_error_txt$_,
}
