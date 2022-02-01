import { has_dom } from '@ctx-core/dom'
import { atom$ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { auth0_email$_ } from './auth0_email$_.js'
/** @type {import('auth0_opened$_.d.ts').auth0_opened$_} */
export const auth0_opened$_ = be_('auth0_opened$', ctx=>{
	const auth0_email$ = auth0_email$_(ctx)
	/** @type {import('auth0_opened$_.d.ts').auth0_opened$_T} */
	const auth0_opened$ = assign(
		/** @type {*} */atom$(undefined), {
			open_auth0_change_password,
			reload_auth0_opened,
		}
	)
	/** @type {Function} */
	let auth0_opened_reload_unsubscribe
	if (has_dom) {
		reload_auth0_opened()
	}
	return auth0_opened$
	function open_auth0_change_password() {
		auth0_opened$.$ = 'change_password'
	}
	function reload_auth0_opened() {
		if (!auth0_opened_reload_unsubscribe) {
			auth0_opened_reload_unsubscribe = auth0_email$.listen(reload_auth0_opened)
			reload_auth0_opened()
			return
		}
		auth0_opened$.$ = null
	}
})
export {
	auth0_opened$_ as b__opened__auth0,
}
