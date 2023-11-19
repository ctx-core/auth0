import { be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__opened_ } from '../auth0__opened/index.js'
export const [
	auth0__login__opened$_,
	auth0__login__opened_,
] = be_computed_pair_(ctx=>{
	const auth0__opened = auth0__opened_(ctx)
	return !auth0__opened || auth0__opened === 'login'
})
	.config({ id: 'auth0__login__opened' })
export {
	auth0__login__opened$_ as auth0__login__opened__,
	auth0__login__opened$_ as auth0_login_opened__,
	auth0__login__opened$_ as auth0_login_opened$_,
}
