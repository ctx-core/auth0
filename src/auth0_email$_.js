import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened$_ } from './auth0_opened$_.js'
import { auth0_userinfo$_ } from './auth0_userinfo$_.js'
/** @type {import('./auth0_email$_.d.ts').auth0_email$_} */
export const auth0_email$_ = be_('auth0_email$', ctx=>{
	const auth0_email$ = computed$(auth0_userinfo$_(ctx),
		$=>$ ? (/** @type {import('@ctx-core/jwt').JwtToken} */$)?.email : null)
	let auth0_email
	auth0_email$.subscribe((_auth0_email)=>{
		if (auth0_email !== _auth0_email) {
			auth0_email = _auth0_email
			auth0_opened$_(ctx).$ = null
		}
	})
	return auth0_email$
})
