import { be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'open_auth0_login'
/** @type {import('./open_auth0_login_b.d.ts').open_auth0_login_b} */
export const open_auth0_login_b = be_(key, (ctx)=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return open_auth0_login
	function open_auth0_login() {
		auth0_opened$.$ = 'login'
	}
})
