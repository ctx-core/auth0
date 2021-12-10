import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_token$_b } from './auth0_token$_b.js'
const key = 'is_auth0_loggedin$'
export const is_auth0_loggedin$_b:B<is_auth0_loggedin$_T> = be_(key, ctx=>
	derived$(
		auth0_token$_b(ctx),
		auth0_token=>!!auth0_token
	) as is_auth0_loggedin$_T)
export type is_auth0_loggedin$_T = Readable$<boolean>
export {
	is_auth0_loggedin$_b as b__is__loggedin__auth0,
}
