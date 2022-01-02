import { be_, assign } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
import { auth0_token$_b } from './auth0_token$_b.js'
const key = 'auth0_logout_msg$'
/** @type {import('./auth0_logout_msg$_b.d.ts').auth0_logout_msg$_b} */
export const auth0_logout_msg$_b = be_(key, ctx=>{
	/** @type {import('./auth0_logout_msg$_b.d.ts').auth0_logout_msg$_T} */
	const auth0_logout_msg$ = atom$(undefined)
	const { logout_auth0_token } = auth0_token$_b(ctx)
	return assign(auth0_logout_msg$, {
		auth0_logout,
	})
	function auth0_logout() {
		logout_auth0_token()
		auth0_logout_msg$.set({
			time: Date.now(),
		})
	}
})
export {
	auth0_logout_msg$_b as b__msg__auth0_logout,
}
