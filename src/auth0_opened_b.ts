import { _b, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { subscribe, Unsubscriber, Writable, writable } from '@ctx-core/store'
import { auth0_email_b, auth0_email_ctx_I } from './auth0_email_b'
const key = 'auth0_opened'
export interface auth0_opened_ctx_I extends auth0_email_ctx_I {
	auth0_opened?:auth0_opened_T
}
export const auth0_opened_b = _b<auth0_opened_ctx_I, typeof key>(key, ctx=>{
	const auth0_email = auth0_email_b(ctx)
	const auth0_opened = assign(
		writable(null) as auth0_opened_T, {
			open_auth0_change_password,
			reload_auth0_opened,
		}
	) as auth0_opened_T
	let auth0_opened_reload_unsubscribe:Unsubscriber
	if (has_dom) {
		reload_auth0_opened()
	}
	return auth0_opened as auth0_opened_T
	function open_auth0_change_password() {
		auth0_opened.set('change_password')
	}
	function reload_auth0_opened() {
		if (!auth0_opened_reload_unsubscribe) {
			auth0_opened_reload_unsubscribe =
				subscribe(auth0_email, reload_auth0_opened)
			return
		}
		auth0_opened.set(false)
	}
})
export type $auth0_opened_T = string|false|null
export interface auth0_opened_T extends Writable<$auth0_opened_T> {
	open_auth0_change_password:()=>void
	reload_auth0_opened:()=>void
}
export {
	auth0_opened_b as b__opened__auth0,
}
