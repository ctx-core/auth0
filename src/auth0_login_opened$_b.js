import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_login_opened$'
/** @type {import('./auth0_login_opened$_b.d.ts').auth0_login_opened$_b} */
export const auth0_login_opened$_b = be_(key, ctx=>
	(computed$(auth0_opened$_b(ctx),
		auth0_login_opened=>
			!auth0_login_opened
			|| auth0_login_opened === 'login.js'
	)))
export {
	auth0_login_opened$_b as login_opened
}
