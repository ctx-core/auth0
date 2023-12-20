import { be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__token_ } from '../auth0__token/index.js'
export const [
	auth0__is_loggedout$_,
	auth0__is_loggedout_,
] = be_memo_pair_(ctx=>
	auth0__token_(ctx) === null,
{ id: 'auth0__is_loggedout' })
export {
	auth0__is_loggedout$_ as auth0__is_loggedout__,
	auth0__is_loggedout$_ as is_auth0_loggedout__,
	auth0__is_loggedout$_ as is_auth0_loggedout$_,
}
