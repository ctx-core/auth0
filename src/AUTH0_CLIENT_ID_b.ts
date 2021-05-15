import { _b, B } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
export const AUTH0_CLIENT_ID_b:AUTH0_CLIENT_ID_b_T = _b('AUTH0_CLIENT_ID', (
	_ctx:AUTH0_CLIENT_ID_ctx_I
)=>
	writable$(process.env.AUTH0_CLIENT_ID as string) as AUTH0_CLIENT_ID_T)
export interface AUTH0_CLIENT_ID_ctx_I {
	AUTH0_CLIENT_ID?:AUTH0_CLIENT_ID_T
}
export type $AUTH0_CLIENT_ID_T = string
export interface AUTH0_CLIENT_ID_T extends Writable$<$AUTH0_CLIENT_ID_T> {}
export interface AUTH0_CLIENT_ID_b_T extends B<AUTH0_CLIENT_ID_T> {}
export {
	AUTH0_CLIENT_ID_b as b__AUTH0_CLIENT_ID
}
