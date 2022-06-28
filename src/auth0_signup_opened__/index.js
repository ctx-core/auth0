import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened__ } from '../auth0_opened__/index.js'
/** @type {import('./auth0_signup_opened__.d.ts').auth0_signup_opened__} */
export const auth0_signup_opened__ = be_('auth0_signup_opened__', ctx=>
	computed_(auth0_opened__(ctx),
		$=>$ === 'signup'))
export { auth0_signup_opened__ as auth0_signup_opened$_ }
