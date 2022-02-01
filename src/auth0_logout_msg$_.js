import { atom$ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { auth0_token$_ } from './auth0_token$_.js'
/** @type {import('./auth0_logout_msg$_.d.ts').auth0_logout_msg$_} */
export const auth0_logout_msg$_ = be_('auth0_logout_msg$', ctx=>{
	/** @type {import('./auth0_logout_msg$_.d.ts').auth0_logout_msg$_T} */
	const auth0_logout_msg$ = atom$(undefined)
	const { logout_auth0_token } = auth0_token$_(ctx)
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
