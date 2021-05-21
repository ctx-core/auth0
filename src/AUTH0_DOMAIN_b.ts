import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'AUTH0_DOMAIN'
export interface AUTH0_DOMAIN_ctx_I {
	AUTH0_DOMAIN?:AUTH0_DOMAIN_T
}
export const AUTH0_DOMAIN_b = _b<AUTH0_DOMAIN_ctx_I, typeof key>(key, (_ctx)=>
	writable$('') as AUTH0_DOMAIN_T)
export type $AUTH0_DOMAIN_T = string
export interface AUTH0_DOMAIN_T extends Writable$<$AUTH0_DOMAIN_T> {}
export {
	AUTH0_DOMAIN_b as b__AUTH0_DOMAIN,
}
