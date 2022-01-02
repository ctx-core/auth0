import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_userinfo$_b } from './auth0_userinfo$_b.js'
const key = 'auth0_email$'
/** @type {import('./auth0_email$_b.d.ts').auth0_email$_b} */
export const auth0_email$_b = be_(key, ctx=>
	computed$(auth0_userinfo$_b(ctx), (
			auth0_userinfo
		)=>
			(auth0_userinfo === null)
			? null
			: (/** @type {Token} */auth0_userinfo)?.email
	))
export {
	auth0_email$_b as b__email__auth0,
	auth0_email$_b as b__email,
}
