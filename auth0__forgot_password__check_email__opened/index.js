import { be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__forgot_password__check_email__opened$_,
	auth0__forgot_password__check_email__opened_,
] = be_memo_pair_(ctx=>
	auth0__opened_(ctx) === 'forgot_password_check_email',
{ id: 'auth0__forgot_password__check_email__opened' })
export {
	auth0__forgot_password__check_email__opened$_ as auth0__forgot_password__check_email__opened__,
	auth0__forgot_password__check_email__opened$_ as auth0_forgot_password_check_email_opened__,
	auth0__forgot_password__check_email__opened$_ as auth0_forgot_password_check_email_opened$_,
}
