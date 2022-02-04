import { waitfor_fibonacci_backoff } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { setter_computed$ } from '@ctx-core/nanostores'
import { AUTH0_DOMAIN$_ } from './AUTH0_DOMAIN$_.js'
import { auth0_token$_ } from './auth0_token$_.js'
import { auth0_userinfo_auth0_token$_ } from './auth0_userinfo_auth0_token$_.js'
import { clear_auth0_token } from './clear_auth0_token.js'
import { get_auth0_userinfo } from './get_auth0_userinfo.js'
/** @type {import('./auth0_userinfo$_.d.ts').auth0_userinfo$_} */
export const auth0_userinfo$_ = be_('auth0_userinfo$', ctx=>{
	const auth0_token$ = auth0_token$_(ctx)
	return setter_computed$([
		AUTH0_DOMAIN$_(ctx),
		auth0_token$,
		auth0_userinfo_auth0_token$_(ctx),
	], async ([AUTH0_DOMAIN, auth0_token, auth0_userinfo_auth0_token,], set)=>{
		if (auth0_token === auth0_userinfo_auth0_token) {
			return
		}
		if (!auth0_token) {
			set(no_auth0_userinfo_auth0_token_())
			return
		}
		set(auth0_token)
		const [auth0_userinfo, response] = await waitfor_fibonacci_backoff(()=>get_auth0_userinfo({
			auth0_token, AUTH0_DOMAIN,
		}))
		if (!response.ok) {
			clear_auth0_token(ctx, null)
			set(null)
			return
		}
		set(auth0_userinfo)
		function no_auth0_userinfo_auth0_token_() {
			return auth0_token === undefined ? undefined : null
		}
	})
})
