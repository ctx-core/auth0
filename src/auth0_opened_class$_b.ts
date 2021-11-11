import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_opened_T, auth0_opened$_b } from './auth0_opened$_b.js'
import type { auth0_Ctx } from './auth0_Ctx.js'
const key = 'auth0_opened_class$'
export const auth0_opened_class$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>
	derived$(auth0_opened$_b(ctx),
		(v:auth0_opened_T)=>v
	) as auth0_opened_class$_T)
export type auth0_opened_class_T = auth0_opened_T
export interface auth0_opened_class$_T extends Readable$<auth0_opened_class_T> {}
export {
	auth0_opened_class$_b as b__class__opened__auth0,
}
