import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'AUTH0_CLIENT_ID'
export interface AUTH0_CLIENT_ID_Ctx {
	AUTH0_CLIENT_ID?:AUTH0_CLIENT_ID_T
}
export const AUTH0_CLIENT_ID_b = _b<AUTH0_CLIENT_ID_Ctx, typeof key>(key, (
	_ctx
)=>
	writable$(process.env.AUTH0_CLIENT_ID as string) as AUTH0_CLIENT_ID_T)
export type $AUTH0_CLIENT_ID_T = string
export interface AUTH0_CLIENT_ID_T extends Writable$<$AUTH0_CLIENT_ID_T> {}
export {
	AUTH0_CLIENT_ID_b as b__AUTH0_CLIENT_ID
}
