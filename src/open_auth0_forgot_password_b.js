import { be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'open_auth0_forgot_password'
/** @type {import('./open_auth0_forgot_password_b.d.ts').open_auth0_forgot_password_b} */
export const open_auth0_forgot_password_b = be_(key, (ctx)=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return open_auth0_forgot_password
	function open_auth0_forgot_password() {
		auth0_opened$.$ = 'forgot_password'
	}
})
//# sourceMappingURL=open_auth0_forgot_password_b.js.map
