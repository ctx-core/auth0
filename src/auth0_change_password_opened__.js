import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened__ } from './auth0_opened__.js'
/** @type {import('./auth0_change_password_opened__.d.ts').auth0_change_password_opened__} */
export const auth0_change_password_opened__ = be_('auth0_change_password_opened__', ctx=>
	computed_(auth0_opened__(ctx),
		$=>$ === 'change_password'))
export {
	auth0_change_password_opened__ as auth0_change_password_opened$_
}
