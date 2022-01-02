import { be_ } from '@ctx-core/object'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'close_auth0'
/** @type {import('./close_auth0_b.d.ts').close_auth0_b} */
export const close_auth0_b = be_(key, (ctx)=>{
	const auth0_opened$ = auth0_opened$_b(ctx)
	return close_auth0
	function close_auth0() {
		auth0_opened$.$ = null
	}
})
//# sourceMappingURL=close_auth0_b.js.map
