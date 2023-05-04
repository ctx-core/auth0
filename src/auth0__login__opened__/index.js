import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
export const [
	auth0__login__opened__,
	auth0__login__opened_,
] = be_computed_pair_(ctx=>
	computed_(auth0__opened__(ctx),
		auth0__opened=>
			!auth0__opened
			|| auth0__opened === 'login'))
export {
	auth0__login__opened__ as auth0_login_opened__,
	auth0__login__opened__ as auth0_login_opened$_,
}
