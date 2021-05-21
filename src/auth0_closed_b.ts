import { _b } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b, auth0_opened_Ctx } from './auth0_opened_b'
const key = 'auth0_closed'
export interface auth0_closed_Ctx extends auth0_opened_Ctx {
	auth0_closed?:auth0_closed_T
}
export const auth0_closed_b = _b<auth0_closed_Ctx, typeof key>(key, ctx=>
	derived(auth0_opened_b(ctx),
		_eql(false)
	) as auth0_closed_T)
export type $auth0_closed_T = boolean
export interface auth0_closed_T extends Readable<$auth0_closed_T> {}
export {
	auth0_closed_b as b__closed__auth0,
}
