import { has_dom } from '@ctx-core/dom'
import { be_, assign } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
import { auth0_email$_b } from './auth0_email$_b.js'
const key = 'auth0_opened$'
/** @type {import('auth0_opened$_b.d.ts').auth0_opened$_b} */
export const auth0_opened$_b = be_(key, ctx=>{
	const auth0_email$ = auth0_email$_b(ctx)
	/** @type {import('auth0_opened$_b.d.ts').auth0_opened$_T} */
	const auth0_opened$ = assign(
		atom$(undefined), {
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
	auth0_opened$_b as b__opened__auth0,
}
