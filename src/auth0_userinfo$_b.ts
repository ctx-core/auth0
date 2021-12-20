import { waitfor_fibonacci_backoff } from '@ctx-core/fetch'
import type { nullish } from '@ctx-core/function'
import { run } from '@ctx-core/function'
import type { Token } from '@ctx-core/jwt'
import { B, be_ } from '@ctx-core/object'
import { ReadableAtom$, setter_computed$ } from '@ctx-core/nanostores'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
import { auth0_token$_b } from './auth0_token$_b.js'
import { auth0_userinfo_auth0_token$_b } from './auth0_userinfo_auth0_token$_b.js'
import { get_auth0_userinfo } from './get_auth0_userinfo.js'
const key = 'auth0_userinfo$'
export const auth0_userinfo$_b:B<auth0_userinfo$_T> = be_(key, ctx=>{
	const auth0_token$ = auth0_token$_b(ctx)
	return setter_computed$([
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
			run(async ()=>{
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
			})
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
export type auth0_userinfo$_T = ReadableAtom$<Token|nullish>
export {
	auth0_userinfo$_b as b__auth0_userinfo,
}
