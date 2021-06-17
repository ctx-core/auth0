import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_opened$_b } from './auth0_opened$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_closed$'
export const auth0_closed$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>
	derived$(auth0_opened$_b(ctx),
		auth0_opened=>
			auth0_opened === null
	) as auth0_closed$_T)
export type auth0_closed$_T = Readable$<boolean>
export {
	auth0_closed$_b as b__closed__auth0,
}
