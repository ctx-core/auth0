import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_error__ } from '../auth0_token_error__/index.js'
/** @type {import('./auth0_token_error_txt__.d.ts').auth0_token_error_txt__} */
export const auth0_token_error_txt__ = be_('auth0_token_error_txt_', ctx=>
	computed_(auth0_token_error__(ctx), $=>
		$
		? $.error_message || $.message
			? $.error_message || $.message
			: $.error_description
				? $.error_description
				: $.error
					? $.error
					: ''
		: ''))
export { auth0_token_error_txt__ as auth0_token_error_txt$_ }
