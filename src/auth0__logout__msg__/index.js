import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { auth0__token__logout } from '../auth0__token__logout/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	auth0__logout__msg__,
	auth0__logout__msg_,
	auth0__logout__msg__set,
] = be_atom_triple_(ctx=>{
	const auth0__logout__msg_ =
		atom_(undefined)
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
 * @param {Ctx}ctx
 */
export function auth0__logout(ctx) {
	auth0__token__logout(ctx)
	auth0__logout__msg__set(ctx, { time: Date.now() })
}
export {
	auth0__logout as auth0_logout,
}
