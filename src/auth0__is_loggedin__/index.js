import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__token__ } from '../auth0__token__/index.js'
export const [
	auth0__is_loggedin__,
	auth0__is_loggedin_,
] = be_computed_pair_(ctx=>
	computed_(auth0__token__(ctx),
		$=>!!$))
export {
	auth0__is_loggedin__ as is_auth0_loggedin__,
	auth0__is_loggedin__ as is_auth0_loggedin$_,
}
