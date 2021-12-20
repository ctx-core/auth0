import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_login_opened$'
export const auth0_login_opened$_b:B<auth0_login_opened$_T> = be_(key, ctx=>
	(computed$(auth0_opened$_b(ctx),
		auth0_login_opened=>
			!auth0_login_opened
			|| auth0_login_opened == 'login.js'
	) as auth0_login_opened$_T))
export type auth0_login_opened$_T = ReadableAtom$<boolean>
export {
	auth0_login_opened$_b as login_opened
}
