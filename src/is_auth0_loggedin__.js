import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token__ } from './auth0_token__.js'
/** @type {import('./is_auth0_loggedin__.d.ts').is_auth0_loggedin__} */
export const is_auth0_loggedin__ = be_('is_auth0_loggedin__', ctx=>
	computed_(auth0_token__(ctx),
		$=>!!$))
export { is_auth0_loggedin__ as is_auth0_loggedin$_ }
