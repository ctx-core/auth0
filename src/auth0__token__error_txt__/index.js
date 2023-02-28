import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__token__error__ } from '../auth0__token__error__/index.js'
/** @type {typeof import('./index.d.ts').auth0__token__error_txt__} */
export const auth0__token__error_txt__ = be_('auth0__token__error_txt__',
	ctx=>computed_(auth0__token__error__(ctx), $=>
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
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @returns {string}
 * @private
 */
export function auth0__token__error_txt_(ctx) {
  return auth0__token__error_txt__(ctx).$
}
