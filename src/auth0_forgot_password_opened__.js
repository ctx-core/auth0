import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened__ } from './auth0_opened__.js'
/** @type {import('./auth0_forgot_password_opened__.d.ts').auth0_forgot_password_opened__} */
export const auth0_forgot_password_opened__ = be_('auth0_forgot_password_opened__', ctx=>
	computed_(auth0_opened__(ctx),
		$=>$ === 'forgot_password'))
export {
	auth0_forgot_password_opened__ as auth0_forgot_password_opened$_
}
