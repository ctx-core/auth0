import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_userinfo$_ } from './auth0_userinfo$_.js'
/** @type {import('./auth0_email$_.d.ts').auth0_email$_} */
export const auth0_email$_ = be_('auth0_email$', ctx=>
	computed$(auth0_userinfo$_(ctx), (
			auth0_userinfo
		)=>
			(auth0_userinfo === null)
			? null
			: (/** @type {Token} */auth0_userinfo)?.email
	))
