import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__closed$_,
	auth0__closed_,
] = id_be_memo_pair_(
	'auth0__closed',
	ctx=>
		auth0__opened_(ctx) === null)
export {
	auth0__closed$_ as auth0__closed__,
	auth0__closed$_ as auth0_closed__,
	auth0__closed$_ as auth0_closed$_,
}
