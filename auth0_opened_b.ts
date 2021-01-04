import { _b, assign, B } from '@ctx-core/object'
import { has__dom } from '@ctx-core/dom'
import { subscribe, Writable, writable } from '@ctx-core/store'
import { auth0_email_b } from './auth0_email_b'
export const auth0_opened_b:auth0_opened_b_type = _b('auth0_opened', (ctx)=>{
	const auth0_email = auth0_email_b(ctx)
	const auth0_opened = assign(
		writable(null) as auth0_opened_type, {
			open_auth0_change_password,
			reload_auth0_opened,
		}
	) as auth0_opened_type
	let auth0_opened_reload_unsubscribe
	if (has__dom) {
		reload_auth0_opened()
	}
	return auth0_opened as auth0_opened_type
	function open_auth0_change_password() {
		auth0_opened.set('change_password')
	}
	function reload_auth0_opened() {
		if (!auth0_opened_reload_unsubscribe) {
			auth0_opened_reload_unsubscribe = true
			auth0_opened_reload_unsubscribe =
				subscribe(auth0_email, reload_auth0_opened)
			return
		}
		auth0_opened.set(false)
	}
})
export type $auth0_opened_type = string|false|null
export interface auth0_opened_type extends Writable<$auth0_opened_type> {
	open_auth0_change_password:()=>void
	reload_auth0_opened:()=>void
}
export interface auth0_opened_b_type extends B<auth0_opened_type> {}
export {
	auth0_opened_b as b__opened__auth0,
	$auth0_opened_type as $type__opened__auth0,
	auth0_opened_type as type__opened__auth0,
}
