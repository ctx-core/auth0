import type { nullish } from '@ctx-core/function'
import type { Token } from '@ctx-core/jwt'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx.js'
import { auth0_userinfo$_b } from './auth0_userinfo$_b.js'
const key = 'auth0_email$'
export const auth0_email$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>
	derived$(auth0_userinfo$_b(ctx), auth0_userinfo=>
		(auth0_userinfo === null)
		? null
		: (auth0_userinfo as Token)?.email
	) as auth0_email$_T)
export type auth0_email$_T = Readable$<string|nullish>
export {
	auth0_email$_b as b__email__auth0,
	auth0_email$_b as b__email,
}
