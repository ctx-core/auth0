import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__token_ } from '../auth0__token/index.js'
export const [
	auth0__is_loggedout$_,
	auth0__is_loggedout_,
] = id_be_memo_pair_(
	'auth0__is_loggedout',
	ctx=>
		auth0__token_(ctx) === null)
export {
	auth0__is_loggedout$_ as auth0__is_loggedout__,
	auth0__is_loggedout$_ as is_auth0_loggedout__,
	auth0__is_loggedout$_ as is_auth0_loggedout$_,
}
