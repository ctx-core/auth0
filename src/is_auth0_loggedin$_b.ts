import { be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_token$_b } from './auth0_token$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'is_auth0_loggedin$'
export const is_auth0_loggedin$_b = be_<auth0_Ctx, typeof key>(key, ctx=>
	derived$(
		auth0_token$_b(ctx),
		auth0_token=>!!auth0_token
	) as is_auth0_loggedin$_T)
export type is_auth0_loggedin_T = boolean
export interface is_auth0_loggedin$_T extends Readable$<is_auth0_loggedin_T> {}
export {
	is_auth0_loggedin$_b as b__is__loggedin__auth0,
}
