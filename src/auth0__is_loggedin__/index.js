import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__token__ } from '../auth0__token__/index.js'
/** @type {typeof import('./index.d.ts').auth0__is_loggedin__} */
export const auth0__is_loggedin__ = be_('auth0__is_loggedin__', ctx=>
	computed_(auth0__token__(ctx),
		$=>!!$))
export {
	auth0__is_loggedin__ as is_auth0_loggedin__,
	auth0__is_loggedin__ as is_auth0_loggedin$_,
}
