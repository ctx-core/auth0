import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__login__opened$_,
	auth0__login__opened_,
] = id_be_memo_pair_(
	'auth0__login__opened',
	ctx=>
		auth0__opened_(ctx) || auth0__opened_(ctx) === 'login')
export {
	auth0__login__opened$_ as auth0__login__opened__,
	auth0__login__opened$_ as auth0_login_opened__,
	auth0__login__opened$_ as auth0_login_opened$_,
}
