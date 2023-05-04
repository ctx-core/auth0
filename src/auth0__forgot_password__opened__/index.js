import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
export const [
	auth0__forgot_password__opened__,
	auth0__forgot_password__opened_,
] = be_computed_pair_(ctx=>
	computed_(auth0__opened__(ctx),
		$=>
			$ === 'forgot_password'))
export {
	auth0__forgot_password__opened__ as auth0_forgot_password_opened__,
	auth0__forgot_password__opened__ as auth0_forgot_password_opened$_,
}
