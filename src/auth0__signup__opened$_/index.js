import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened$_/index.js'
export const [
	auth0__signup__opened$_,
	auth0__signup__opened_,
] = be_computed_pair_(ctx=>
	computed_(auth0__opened$_(ctx),
		auth0__opened=>
			auth0__opened === 'signup'))
export {
	auth0__signup__opened$_ as auth0__signup__opened__,
	auth0__signup__opened$_ as auth0_signup_opened__,
	auth0__signup__opened$_ as auth0_signup_opened$_,
}
