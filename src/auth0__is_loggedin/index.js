import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__token_ } from '../auth0__token/index.js'
export const [
	auth0__is_loggedin$_,
	auth0__is_loggedin_,
] = val__be_computed_pair_(ctx=>
	!!auth0__token_(ctx))
export {
	auth0__is_loggedin$_ as auth0__is_loggedin__,
	auth0__is_loggedin$_ as is_auth0_loggedin__,
	auth0__is_loggedin$_ as is_auth0_loggedin$_,
}
