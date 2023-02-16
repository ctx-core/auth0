import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__token__logout } from '../auth0__token__logout/index.js'
/** @type {typeof import('./index.js.d.ts').auth0__logout__msg__} */
export const auth0__logout__msg__ = be_('auth0__logout__msg__', ()=>{
	const auth0__logout__msg_ = atom_(undefined)
	auth0__logout__msg_.subscribe($=>{
		if ($) {
			queueMicrotask(()=>auth0__logout__msg_.$ = null)
		}
	})
	return auth0__logout__msg_
})
export {
	auth0__logout__msg__ as auth0_logout_msg__,
	auth0__logout__msg__ as auth0_logout_msg$_,
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__logout(ctx) {
	auth0__token__logout(ctx)
	auth0__logout__msg__(ctx).$ = { time: Date.now() }
}
export {
	auth0__logout as auth0_logout,
}
