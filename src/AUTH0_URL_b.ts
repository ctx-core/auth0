import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const AUTH0_URL_b:AUTH0_URL_b_type = _b('AUTH0_URL', ()=>
	writable<$AUTH0_URL_type>(process.env.AUTH0_URL as $AUTH0_URL_type)
)
export type $AUTH0_URL_type = string
export interface AUTH0_URL_type extends Writable<$AUTH0_URL_type> {}
export interface AUTH0_URL_b_type extends B<AUTH0_URL_type> {}
export {
	AUTH0_URL_b as b__AUTH0_URL,
}
