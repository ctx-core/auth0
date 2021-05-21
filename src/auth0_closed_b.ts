import { _b } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
const key = 'auth0_closed'
export interface auth0_closed_ctx_I extends auth0_opened_ctx_I {
	auth0_closed?:auth0_closed_T
}
export const auth0_closed_b = _b<auth0_closed_ctx_I, typeof key>(key, ctx=>
	derived(auth0_opened_b(ctx),
		_eql(false)
	) as auth0_closed_T)
export type $auth0_closed_T = boolean
export interface auth0_closed_T extends Readable<$auth0_closed_T> {}
export {
	auth0_closed_b as b__closed__auth0,
}
