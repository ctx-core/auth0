import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('./index.d.ts').auth0__forgot_password__check_email__opened__} */
export const auth0__forgot_password__check_email__opened__ = be_('auth0__forgot_password__check_email__opened__',
	ctx=>computed_(
		auth0__opened__(ctx),
		$=>$ === 'forgot_password_check_email'))
export {
	auth0__forgot_password__check_email__opened__ as auth0_forgot_password_check_email_opened__,
	auth0__forgot_password__check_email__opened__ as auth0_forgot_password_check_email_opened$_,
}
