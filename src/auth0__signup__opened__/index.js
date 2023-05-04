import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('./index.d.ts').auth0__signup__opened__} */
export const [
	auth0__signup__opened__,
	auth0__signup__opened_,
] = be_computed_pair_(ctx=>
	computed_(auth0__opened__(ctx),
		auth0__opened=>
			auth0__opened === 'signup'))
export {
	auth0__signup__opened__ as auth0_signup_opened__,
	auth0__signup__opened__ as auth0_signup_opened$_,
}
