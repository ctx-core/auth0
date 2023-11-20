import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { be_ } from 'ctx-core/all'
import { auth0__token__logout } from '../auth0__token__logout/index.js'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('./index.d.ts').auth0__logout__msg_T} */
export const [
	auth0__logout__msg$_,
	auth0__logout__msg_,
	auth0__logout__msg__set,
] = /** @type {be_atom_triple_T<auth0__logout__msg_T>} */be_atom_triple_(be_(ctx=>{
	const auth0__logout__msg$ = atom_(undefined)
	auth0__logout__msg$.subscribe(auth0__logout__msg=>{
		if (auth0__logout__msg) {
			queueMicrotask(()=>
				auth0__logout__msg__set(ctx, null))
		}
	})
	return auth0__logout__msg$
}), { id: 'auth0__logout__msg' })
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
