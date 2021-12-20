import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import type { auth0_token_T } from './auth0_token$_b.js'
const key = 'auth0_userinfo_auth0_token$'
export const auth0_userinfo_auth0_token$_b:B<auth0_userinfo_auth0_token$_T> = be_(key, ()=>
	atom$(undefined) as auth0_userinfo_auth0_token$_T)
export type auth0_userinfo_auth0_token_T = auth0_token_T|undefined
export type auth0_userinfo_auth0_token$_T = WritableAtom$<auth0_userinfo_auth0_token_T>
export {
	auth0_userinfo_auth0_token$_b as b__auth0_userinfo_auth0_token,
}
