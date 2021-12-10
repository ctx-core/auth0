import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'AUTH0_CLIENT_ID$'
export const AUTH0_CLIENT_ID$_b:B<AUTH0_CLIENT_ID$_T> = be_(key, (
	_ctx
)=>
	writable$(process.env.AUTH0_CLIENT_ID as string) as AUTH0_CLIENT_ID$_T)
export type AUTH0_CLIENT_ID$_T = Writable$<string>
export {
	AUTH0_CLIENT_ID$_b as b__AUTH0_CLIENT_ID
}
