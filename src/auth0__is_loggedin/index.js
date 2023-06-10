import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__token$_ } from '../auth0__token/index.js'
export const [
	auth0__is_loggedin$_,
	auth0__is_loggedin_,
] = be_computed_pair_(ctx=>
	computed_(auth0__token$_(ctx),
		$=>!!$))
export {
	auth0__is_loggedin$_ as auth0__is_loggedin__,
	auth0__is_loggedin$_ as is_auth0_loggedin__,
	auth0__is_loggedin$_ as is_auth0_loggedin$_,
}
