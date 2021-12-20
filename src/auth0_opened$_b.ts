import { has_dom } from '@ctx-core/dom'
import type { nullish } from '@ctx-core/function'
import { be_, assign, B } from '@ctx-core/object'
import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
import { auth0_email$_b } from './auth0_email$_b.js'
const key = 'auth0_opened$'
export const auth0_opened$_b:B<auth0_opened$_T> = be_(key, ctx=>{
	const auth0_email$ = auth0_email$_b(ctx)
	const auth0_opened$ = assign(
		atom$(undefined) as auth0_opened$_T, {
			open_auth0_change_password,
			reload_auth0_opened,
		}
	) as auth0_opened$_T
	let auth0_opened_reload_unsubscribe:()=>void
	if (has_dom) {
		reload_auth0_opened()
	}
	return auth0_opened$ as auth0_opened$_T
	function open_auth0_change_password() {
		auth0_opened$.$ = 'change_password'
	}
	function reload_auth0_opened() {
		if (!auth0_opened_reload_unsubscribe) {
			auth0_opened_reload_unsubscribe = auth0_email$.subscribe(reload_auth0_opened)
			return
		}
		auth0_opened$.$ = null
	}
})
export type auth0_opened_T = string|nullish
export interface auth0_opened$_T extends WritableAtom$<auth0_opened_T> {
	open_auth0_change_password:()=>void
	reload_auth0_opened:()=>void
}
export {
	auth0_opened$_b as b__opened__auth0,
}
