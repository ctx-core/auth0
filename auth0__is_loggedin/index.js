import { be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__token_ } from '../auth0__token/index.js'
export const [
	auth0__is_loggedin$_,
	auth0__is_loggedin_,
] = be_memo_pair_(ctx=>
	!!auth0__token_(ctx),
{ id: 'auth0__is_loggedin' })
export {
	auth0__is_loggedin$_ as auth0__is_loggedin__,
	auth0__is_loggedin$_ as is_auth0_loggedin__,
	auth0__is_loggedin$_ as is_auth0_loggedin$_,
}
