import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { $auth0_token_T } from './auth0_token_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_userinfo_auth0_token'
export const auth0_userinfo_auth0_token_b = _b<auth0_Ctx, typeof key>(key, ()=>
	writable$<$auth0_userinfo_auth0_token_T>(null) as auth0_userinfo_auth0_token_T)
export type $auth0_userinfo_auth0_token_T = $auth0_token_T|null
export interface auth0_userinfo_auth0_token_T extends Writable$<$auth0_userinfo_auth0_token_T> {}
export {
	auth0_userinfo_auth0_token_b as b__auth0_userinfo_auth0_token,
}
