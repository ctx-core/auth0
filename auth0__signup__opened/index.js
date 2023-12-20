import { be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__signup__opened$_,
	auth0__signup__opened_,
] = be_memo_pair_(ctx=>
	auth0__opened_(ctx) === 'signup',
{ id: 'auth0__signup__opened' })
export {
	auth0__signup__opened$_ as auth0__signup__opened__,
	auth0__signup__opened$_ as auth0_signup_opened__,
	auth0__signup__opened$_ as auth0_signup_opened$_,
}
