import { B, be_ } from '@ctx-core/object'
import { eq_ } from '@ctx-core/function'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_opened_T, auth0_opened$_b } from './auth0_opened$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_signup_opened$'
export const auth0_signup_opened$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>
	derived$(auth0_opened$_b(ctx),
		eq_<auth0_opened_T>('signup')
	) as auth0_signup_opened$_T)
export type auth0_signup_opened_T = boolean
export type auth0_signup_opened$_T = Readable$<auth0_signup_opened_T>
export {
	auth0_signup_opened$_b as b__opened__signup,
}
