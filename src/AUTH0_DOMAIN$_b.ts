import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx.js'
const key = 'AUTH0_DOMAIN$'
export const AUTH0_DOMAIN$_b:B<auth0_Ctx, typeof key> = be_(key, ()=>
	writable$('') as AUTH0_DOMAIN$_T)
export type AUTH0_DOMAIN_T = string
export interface AUTH0_DOMAIN$_T extends Writable$<AUTH0_DOMAIN_T> {}
export {
	AUTH0_DOMAIN$_b as b__AUTH0_DOMAIN,
}
