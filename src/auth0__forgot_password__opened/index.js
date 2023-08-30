import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__forgot_password__opened$_,
	auth0__forgot_password__opened_,
] = val__be_computed_pair_('auth0__forgot_password__opened', ctx=>
	auth0__opened_(ctx) === 'forgot_password')
export {
	auth0__forgot_password__opened$_ as auth0__forgot_password__opened__,
	auth0__forgot_password__opened$_ as auth0_forgot_password_opened__,
	auth0__forgot_password__opened$_ as auth0_forgot_password_opened$_,
}
