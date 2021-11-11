import type { nullish } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { waitfor_fibonacci_backoff } from '@ctx-core/fetch'
import type { Token } from '@ctx-core/jwt'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
import { auth0_token$_b } from './auth0_token$_b.js'
import { auth0_userinfo_auth0_token$_b } from './auth0_userinfo_auth0_token$_b.js'
import { get_auth0_userinfo } from './get_auth0_userinfo.js'
import type { auth0_Ctx } from './auth0_Ctx.js'
const key = 'auth0_userinfo$'
export const auth0_userinfo$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const auth0_token$ = auth0_token$_b(ctx)
	return derived$([
			AUTH0_DOMAIN$_b(ctx),
			auth0_token$,
			auth0_userinfo_auth0_token$_b(ctx),
		],
		(
			[
				AUTH0_DOMAIN,
				auth0_token,
				auth0_userinfo_auth0_token,
			],
			set
		)=>{
			(async ()=>{
				if (auth0_token === auth0_userinfo_auth0_token) {
					return
				}
				if (!auth0_token) {
					set(no_auth0_userinfo_auth0_token_())
					return
				}
				set(auth0_token)
				const response =
					await waitfor_fibonacci_backoff(()=>
						get_auth0_userinfo({
							auth0_token: auth0_token,
							AUTH0_DOMAIN: AUTH0_DOMAIN,
						}))
				if (!response.ok) {
					auth0_token$.clear_auth0_token(null)
					set(null)
					return
				}
				const auth0_userinfo = await response.json()
				set(auth0_userinfo)
			})()
			function no_auth0_userinfo_auth0_token_() {
				return (
					auth0_token === undefined
					? undefined
					: null
				)
			}
		}
	) as auth0_userinfo$_T
})
export type auth0_userinfo$_T = Readable$<Token|nullish>
export {
	auth0_userinfo$_b as b__auth0_userinfo,
}
