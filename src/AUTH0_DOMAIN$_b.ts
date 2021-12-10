import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'AUTH0_DOMAIN$'
export const AUTH0_DOMAIN$_b:B<AUTH0_DOMAIN$_T> = be_(key, ()=>
	writable$('') as AUTH0_DOMAIN$_T)
export type AUTH0_DOMAIN$_T = Writable$<string>
export {
	AUTH0_DOMAIN$_b as b__AUTH0_DOMAIN,
}
