import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const AUTH0_DOMAIN_b = _b('AUTH0_DOMAIN', ()=>
	writable('') as AUTH0_DOMAIN_type)
export type $AUTH0_DOMAIN_type = string
export type AUTH0_DOMAIN_type = Writable<$AUTH0_DOMAIN_type>
export {
	AUTH0_DOMAIN_b as b__AUTH0_DOMAIN,
}
