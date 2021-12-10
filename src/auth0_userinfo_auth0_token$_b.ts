import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { auth0_token_T } from './auth0_token$_b.js'
const key = 'auth0_userinfo_auth0_token$'
export const auth0_userinfo_auth0_token$_b:B<auth0_userinfo_auth0_token$_T> = be_(key, ()=>
	writable$(undefined) as auth0_userinfo_auth0_token$_T)
export type auth0_userinfo_auth0_token_T = auth0_token_T|undefined
export type auth0_userinfo_auth0_token$_T = Writable$<auth0_userinfo_auth0_token_T>
export {
	auth0_userinfo_auth0_token$_b as b__auth0_userinfo_auth0_token,
}
