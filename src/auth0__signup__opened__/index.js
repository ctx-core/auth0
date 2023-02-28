import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('./index.d.ts').auth0__signup__opened__} */
export const auth0__signup__opened__ = be_('auth0__signup__opened__',
	ctx=>computed_(auth0__opened__(ctx),
		$=>$ === 'signup'))
export {
	auth0__signup__opened__ as auth0_signup_opened__,
	auth0__signup__opened__ as auth0_signup_opened$_,
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @returns {boolean}
 * @private
 */
export function auth0__signup__opened_(ctx) {
  return auth0__signup__opened__(ctx).$
}
