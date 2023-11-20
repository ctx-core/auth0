import { be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened/index.js'
export const [
	auth0__forgot_password__check_email__opened$_,
	auth0__forgot_password__check_email__opened_,
] = be_computed_pair_(ctx=>auth0__opened$_(ctx),
	auth0__opened=>auth0__opened === 'forgot_password_check_email',
	{ id: 'auth0__forgot_password__check_email__opened' })
export {
	auth0__forgot_password__check_email__opened$_ as auth0__forgot_password__check_email__opened__,
	auth0__forgot_password__check_email__opened$_ as auth0_forgot_password_check_email_opened__,
	auth0__forgot_password__check_email__opened$_ as auth0_forgot_password_check_email_opened$_,
}
