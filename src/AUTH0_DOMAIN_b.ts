import { _b, B } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
export const AUTH0_DOMAIN_b:AUTH0_DOMAIN_b_T = _b('AUTH0_DOMAIN', (
	_ctx:AUTH0_DOMAIN_ctx_I
)=>
	writable$('') as AUTH0_DOMAIN_T)
export interface AUTH0_DOMAIN_ctx_I {
	AUTH0_DOMAIN?:AUTH0_DOMAIN_T
}
export type $AUTH0_DOMAIN_T = string
export interface AUTH0_DOMAIN_T extends Writable$<$AUTH0_DOMAIN_T> {}
export interface AUTH0_DOMAIN_b_T extends B<AUTH0_DOMAIN_T> {}
export {
	AUTH0_DOMAIN_b as b__AUTH0_DOMAIN,
}
