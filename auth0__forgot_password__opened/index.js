import { be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__forgot_password__opened$_,
	auth0__forgot_password__opened_,
] = be_computed_pair_(ctx=>
	auth0__opened_(ctx) === 'forgot_password')
	.config({ id: 'auth0__forgot_password__opened' })
export {
	auth0__forgot_password__opened$_ as auth0__forgot_password__opened__,
	auth0__forgot_password__opened$_ as auth0_forgot_password_opened__,
	auth0__forgot_password__opened$_ as auth0_forgot_password_opened$_,
}
