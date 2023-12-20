/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_sig_triple_, sig_ } from 'ctx-core/rmemo'
import { be_ } from 'ctx-core/be'
import { auth0__token__logout } from '../auth0__token__logout/index.js'
export const [
	auth0__logout__msg$_,
	auth0__logout__msg_,
	auth0__logout__msg__set,
] = /** @type {be_sig_triple_T<auth0__logout__msg_T>} */be_sig_triple_(
	be_(()=>
		sig_(undefined, auth0__logout__msg$=>{
			if (auth0__logout__msg$._) {
				queueMicrotask(()=>
					auth0__logout__msg$._ = null)
			}
		})), { id: 'auth0__logout__msg' })
export {
	auth0__logout__msg$_ as auth0__logout__msg__,
	auth0__logout__msg$_ as auth0_logout_msg__,
	auth0__logout__msg$_ as auth0_logout_msg$_,
}
/**
 * @param {Ctx}ctx
 */
export function auth0__logout(ctx) {
	auth0__token__logout(ctx)
	auth0__logout__msg__set(ctx, { time: Date.now() })
}
export {
	auth0__logout as auth0_logout,
}
