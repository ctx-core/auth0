import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_error$_ } from './auth0_token_error$_.js'
/** @type {import('./auth0_token_error_txt$_.d.ts').auth0_token_error_txt$_} */
export const auth0_token_error_txt$_ = be_('auth0_token_error_txt$', ctx=>
	computed$(auth0_token_error$_(ctx), auth0_token_error=>
		auth0_token_error
		? auth0_token_error.error_message
			|| auth0_token_error.message
			? auth0_token_error.error_message
				|| auth0_token_error.message
			: auth0_token_error.error_description
				? auth0_token_error.error_description
				: auth0_token_error.error
					? auth0_token_error.error
					: ''
		: ''
	))
