import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const AUTH0_DOMAIN_b:AUTH0_DOMAIN_b_type = _b('AUTH0_DOMAIN', ()=>
	writable('') as AUTH0_DOMAIN_type
)
export type $AUTH0_DOMAIN_type = string
export interface AUTH0_DOMAIN_type extends Writable<$AUTH0_DOMAIN_type> {}
export interface AUTH0_DOMAIN_b_type extends B<AUTH0_DOMAIN_type> {}
export {
	AUTH0_DOMAIN_b as b__AUTH0_DOMAIN,
}
