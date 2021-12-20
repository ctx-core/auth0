import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { auth0_opened_T, auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_opened_class$'
export const auth0_opened_class$_b:B<auth0_opened_class$_T> = be_(key, ctx=>
	computed$(auth0_opened$_b(ctx),
		(v:auth0_opened_T)=>v
	) as auth0_opened_class$_T)
export type auth0_opened_class_T = auth0_opened_T
export interface auth0_opened_class$_T extends ReadableAtom$<auth0_opened_class_T> {}
export {
	auth0_opened_class$_b as b__class__opened__auth0,
}
