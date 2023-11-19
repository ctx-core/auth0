import { be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__signup__opened$_,
	auth0__signup__opened_,
] = be_computed_pair_(ctx=>
	auth0__opened_(ctx) === 'signup')
	.config({ id: 'auth0__signup__opened' })
export {
	auth0__signup__opened$_ as auth0__signup__opened__,
	auth0__signup__opened$_ as auth0_signup_opened__,
	auth0__signup__opened$_ as auth0_signup_opened$_,
}
