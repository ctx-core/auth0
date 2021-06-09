import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { auth0_token_T } from './auth0_token$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_userinfo_auth0_token$'
export const auth0_userinfo_auth0_token$_b:B<auth0_Ctx, typeof key> = be_(key, ()=>
	writable$(undefined))
export type auth0_userinfo_auth0_token_T = auth0_token_T|undefined
export type auth0_userinfo_auth0_token$_T = Writable$<auth0_token_T|undefined>
export {
	auth0_userinfo_auth0_token$_b as b__auth0_userinfo_auth0_token,
}
