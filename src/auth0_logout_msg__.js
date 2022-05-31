import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { logout_auth0_token } from './logout_auth0_token.js'
/** @type {import('./auth0_logout_msg__.d.ts').auth0_logout_msg__} */
export const auth0_logout_msg__ = be_('auth0_logout_msg__', ()=>{
	const auth0_logout_msg_ = atom_(undefined)
	auth0_logout_msg_.subscribe($=>{
		if ($) {
			queueMicrotask(()=>auth0_logout_msg_.$ = null)
		}
	})
	return auth0_logout_msg_
})
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0_logout(ctx) {
	logout_auth0_token(ctx)
	auth0_logout_msg__(ctx).$ = { time: Date.now() }
}
export { auth0_logout_msg__ as auth0_logout_msg$_ }
