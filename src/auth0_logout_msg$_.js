import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { logout_auth0_token } from './logout_auth0_token.js'
/** @type {import('./auth0_logout_msg$_.d.ts').auth0_logout_msg$_} */
export const auth0_logout_msg$_ = be_('auth0_logout_msg$', ()=>{
	const auth0_logout_msg$ = atom_(undefined)
	auth0_logout_msg$.subscribe($=>{
		if ($) {
			queueMicrotask(()=>auth0_logout_msg$.$ = null)
		}
	})
	return auth0_logout_msg$
})
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0_logout(ctx) {
	logout_auth0_token(ctx)
	auth0_logout_msg$_(ctx).$ = { time: Date.now() }
}
