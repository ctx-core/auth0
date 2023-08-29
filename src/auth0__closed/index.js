import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__closed$_,
	auth0__closed_,
] = val__be_computed_pair_(ctx=>
	auth0__opened_(ctx) === null)
export {
	auth0__closed$_ as auth0__closed__,
	auth0__closed$_ as auth0_closed__,
	auth0__closed$_ as auth0_closed$_,
}
