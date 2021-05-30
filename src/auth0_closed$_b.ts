import { _eql } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_opened$_b } from './auth0_opened$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_closed$'
export const auth0_closed$_b = _b<auth0_Ctx, typeof key>(key, ctx=>
	derived$(auth0_opened$_b(ctx),
		_eql(false)
	) as auth0_closed$_T)
export type auth0_closed_T = boolean
export interface auth0_closed$_T extends Readable$<auth0_closed_T> {}
export {
	auth0_closed$_b as b__closed__auth0,
}
