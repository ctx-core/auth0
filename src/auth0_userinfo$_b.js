import { waitfor_fibonacci_backoff } from '@ctx-core/fetch-undici'
import { run } from '@ctx-core/function'
import { be_ } from '@ctx-core/object'
import { setter_computed$ } from '@ctx-core/nanostores'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
import { auth0_token$_b } from './auth0_token$_b.js'
import { auth0_userinfo_auth0_token$_b } from './auth0_userinfo_auth0_token$_b.js'
import { get_auth0_userinfo } from './get_auth0_userinfo.js'
const key = 'auth0_userinfo$'
/** @type {import('./auth0_userinfo$_b.d.ts').auth0_userinfo$_b} */
export const auth0_userinfo$_b = be_(key, ctx=>{
	const auth0_token$ = auth0_token$_b(ctx)
	return setter_computed$([
		AUTH0_DOMAIN$_b(ctx),
		auth0_token$,
		auth0_userinfo_auth0_token$_b(ctx),
	], ([AUTH0_DOMAIN, auth0_token, auth0_userinfo_auth0_token,], set)=>{
		run(async ()=>{
			if (auth0_token === auth0_userinfo_auth0_token) {
				return
			}
			if (!auth0_token) {
				set(no_auth0_userinfo_auth0_token_())
				return
			}
			set(auth0_token)
			const [auth0_userinfo, response] = await waitfor_fibonacci_backoff(()=>get_auth0_userinfo({
					auth0_token: auth0_token,
					AUTH0_DOMAIN: AUTH0_DOMAIN
				})
			)
			if (!response.ok) {
				auth0_token$.clear_auth0_token(null)
				set(null)
				return
			}
			set(auth0_userinfo)
		})
		function no_auth0_userinfo_auth0_token_() {
			return auth0_token === undefined ? undefined : null
		}
	})
})
export { auth0_userinfo$_b as b__auth0_userinfo, }
