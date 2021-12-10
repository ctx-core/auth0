import type { B } from '@ctx-core/object'
import { be_ } from '@ctx-core/object'
import type { Readable$ } from '@ctx-core/store'
import { derived$ } from '@ctx-core/store'
import { auth0_token$_b } from './auth0_token$_b.js'
const key = 'is_auth0_loggedout$'
export const is_auth0_loggedout$_b:B<is_auth0_loggedout$_T> = be_(key, ctx=>
	derived$(
		auth0_token$_b(ctx),
			auth0_token=>auth0_token === null
	) as is_auth0_loggedout$_T)
export type is_auth0_loggedout$_T = Readable$<boolean>
export {
	is_auth0_loggedout$_b as b__is__loggedout__auth0,
}
