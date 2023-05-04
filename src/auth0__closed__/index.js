import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
export const [
	auth0__closed__,
	auth0__closed_,
] = be_computed_pair_(ctx=>
	computed_(auth0__opened__(ctx),
		$=>$ === null))
export {
	auth0__closed__ as auth0_closed__,
	auth0__closed__ as auth0_closed$_,
}
