import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
export const [
	auth0__forgot_password__check_email__opened__,
	auth0__forgot_password__check_email__opened_,
] = be_computed_pair_(ctx=>
	computed_(
		auth0__opened__(ctx),
		$=>$ === 'forgot_password_check_email'))
export {
	auth0__forgot_password__check_email__opened__ as auth0_forgot_password_check_email_opened__,
	auth0__forgot_password__check_email__opened__ as auth0_forgot_password_check_email_opened$_,
}
