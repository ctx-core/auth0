import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened$_/index.js'
export const [
	auth0__forgot_password__check_email__opened$_,
	auth0__forgot_password__check_email__opened_,
] = be_computed_pair_(ctx=>
	computed_(
		auth0__opened$_(ctx),
		$=>$ === 'forgot_password_check_email'))
export {
	auth0__forgot_password__check_email__opened$_ as auth0__forgot_password__check_email__opened__,
	auth0__forgot_password__check_email__opened$_ as auth0_forgot_password_check_email_opened__,
	auth0__forgot_password__check_email__opened$_ as auth0_forgot_password_check_email_opened$_,
}
