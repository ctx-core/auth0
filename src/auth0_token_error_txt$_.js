import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_error$_ } from './auth0_token_error$_.js'
/** @type {import('./auth0_token_error_txt$_.d.ts').auth0_token_error_txt$_} */
export const auth0_token_error_txt$_ = be_('auth0_token_error_txt$', ctx=>
	computed$(auth0_token_error$_(ctx), $=>
		$
		? $.error_message || $.message
			? $.error_message || $.message
			: $.error_description
				? $.error_description
				: $.error
					? $.error
					: ''
		: ''))
