import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_token_error$_b } from './auth0_token_error$_b.js'
const key = 'auth0_token_error_txt$'
/** @type {import('./auth0_token_error_txt$_b.d.ts').auth0_token_error_txt$_b} */
export const auth0_token_error_txt$_b = be_(key, ctx=>
	computed$(auth0_token_error$_b(ctx), auth0_token_error=>
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
export { auth0_token_error_txt$_b as b__txt__error__token__auth0, }
