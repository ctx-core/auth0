import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__token$_ } from '../auth0__token/index.js'
export const [
	auth0__is_loggedout$_,
	auth0__is_loggedout_,
] = be_computed_pair_(ctx=>
	computed_(auth0__token$_(ctx),
		auth__token=>
			auth__token === null))
export {
	auth0__is_loggedout$_ as auth0__is_loggedout__,
	auth0__is_loggedout$_ as is_auth0_loggedout__,
	auth0__is_loggedout$_ as is_auth0_loggedout$_,
}
