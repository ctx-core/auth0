import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'AUTH0_DOMAIN$'
export const AUTH0_DOMAIN$_b:B<AUTH0_DOMAIN$_T> = be_(key, ()=>
	atom$('') as AUTH0_DOMAIN$_T)
export type AUTH0_DOMAIN$_T = WritableAtom$<string>
export {
	AUTH0_DOMAIN$_b as b__AUTH0_DOMAIN,
}
