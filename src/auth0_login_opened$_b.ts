import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx.js'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_login_opened$'
export const auth0_login_opened$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>
	(derived$(auth0_opened$_b(ctx),
		auth0_login_opened=>
			!auth0_login_opened
			|| auth0_login_opened == 'login.js'
	) as auth0_login_opened$_T))
export type auth0_login_opened$_T = Readable$<boolean>
export {
	auth0_login_opened$_b as login_opened
}
