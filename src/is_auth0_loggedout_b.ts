import { _eql } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_token_b } from './auth0_token_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'is_auth0_loggedout'
export const is_auth0_loggedout_b = _b<auth0_Ctx, typeof key>(key, ctx=>
	derived$(
		auth0_token_b(ctx), _eql(false)
	) as is_auth0_loggedout_T)
export type $is_auth0_loggedout_T = boolean
export interface is_auth0_loggedout_T extends Readable$<$is_auth0_loggedout_T> {}
export {
	is_auth0_loggedout_b as b__is__loggedout__auth0,
}
