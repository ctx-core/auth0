import { tup } from '@ctx-core/array'
import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_userinfo$_ } from './auth0_userinfo$_.js'
import { auth0_userinfo_auth0_token$_ } from './auth0_userinfo_auth0_token$_.js'
/** @type {import('./auth0_userinfo_ctx$_.d.ts').auth0_userinfo_ctx$_} */
export const auth0_userinfo_ctx$_ = be_('auth0_userinfo_ctx$', ctx=>
	computed$(
		tup(auth0_userinfo$_(ctx), auth0_userinfo_auth0_token$_(ctx)),
		(auth0_userinfo, auth0_userinfo_auth0_token)=>({
			auth0_userinfo,
			auth0_userinfo_auth0_token
		})
	)
)
