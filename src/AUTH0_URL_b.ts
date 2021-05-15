import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const AUTH0_URL_b:AUTH0_URL_b_T = _b('AUTH0_URL', (
	_ctx:AUTH0_URL_ctx_I
)=>
	writable<$AUTH0_URL_T>(process.env.AUTH0_URL as $AUTH0_URL_T))
export interface AUTH0_URL_ctx_I {
	AUTH0_URL?:AUTH0_URL_T
}
export type $AUTH0_URL_T = string
export interface AUTH0_URL_T extends Writable<$AUTH0_URL_T> {}
export interface AUTH0_URL_b_T extends B<AUTH0_URL_T> {}
export {
	AUTH0_URL_b as b__AUTH0_URL,
}
