import type { Token } from 'auth0'
import { tup } from '@ctx-core/array'
import type { nullish } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_userinfo$_b } from './auth0_userinfo$_b.js'
import { auth0_userinfo_auth0_token_T, auth0_userinfo_auth0_token$_b } from './auth0_userinfo_auth0_token$_b.js'
const key = 'auth0_userinfo_ctx$'
export const auth0_userinfo_ctx$_b:B<auth0_userinfo_ctx$_T> = be_(key, ctx=>
	derived$(tup(
		auth0_userinfo$_b(ctx),
		auth0_userinfo_auth0_token$_b(ctx),
		),
		([auth0_userinfo, auth0_userinfo_auth0_token])=>(
			{
				auth0_userinfo,
				auth0_userinfo_auth0_token,
			}
		)
	) as auth0_userinfo_ctx$_T)
export interface auth0_userinfo_ctx_T {
	auth0_userinfo:Token|nullish,
	auth0_userinfo_auth0_token:auth0_userinfo_auth0_token_T,
}
export type auth0_userinfo_ctx$_T = Readable$<auth0_userinfo_ctx_T>
export {
	auth0_userinfo_ctx$_b as b__ctx__auth0_userinfo
}
