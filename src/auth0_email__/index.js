import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened__ } from '../auth0_opened__/index.js'
import { auth0_userinfo__ } from '../auth0_userinfo__/index.js'
/** @type {import('./auth0_email__.d.ts').auth0_email__} */
export const auth0_email__ = be_('auth0_email_', ctx=>{
	const auth0_email_ = computed_(auth0_userinfo__(ctx),
		$=>$ ? (/** @type {import('@ctx-core/jwt').JwtToken} */$)?.email : null)
	let auth0_email
	auth0_email_.subscribe((_auth0_email)=>{
		if (auth0_email !== _auth0_email) {
			auth0_email = _auth0_email
			auth0_opened__(ctx).$ = null
		}
	})
	return auth0_email_
})
export { auth0_email__ as auth0_email$_ }
