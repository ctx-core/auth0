import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'AUTH0_CLIENT_ID$'
export const AUTH0_CLIENT_ID$_b:B<auth0_Ctx, typeof key> = be_(key, (
	_ctx
)=>
	writable$(process.env.AUTH0_CLIENT_ID as string) as AUTH0_CLIENT_ID$_T)
export type AUTH0_CLIENT_ID_T = string
export interface AUTH0_CLIENT_ID$_T extends Writable$<AUTH0_CLIENT_ID_T> {}
export {
	AUTH0_CLIENT_ID$_b as b__AUTH0_CLIENT_ID
}
