import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened$_/index.js'
export const [
	auth0__closed$_,
	auth0__closed_,
] = be_computed_pair_(ctx=>
	computed_(auth0__opened$_(ctx),
		$=>$ === null))
export {
	auth0__closed$_ as auth0__closed__,
	auth0__closed$_ as auth0_closed__,
	auth0__closed$_ as auth0_closed$_,
}
