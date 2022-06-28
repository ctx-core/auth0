import { tup } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_userinfo__ } from '../auth0_userinfo__/index.js'
import { auth0_userinfo_auth0_token__ } from '../auth0_userinfo_auth0_token__/index.js'
/** @type {import('./auth0_userinfo_ctx__.d.ts').auth0_userinfo_ctx__} */
export const auth0_userinfo_ctx__ = be_('auth0_userinfo_ctx__', ctx=>
	computed_(
		tup(auth0_userinfo__(ctx), auth0_userinfo_auth0_token__(ctx)),
		(auth0_userinfo, auth0_userinfo_auth0_token)=>({
			auth0_userinfo,
			auth0_userinfo_auth0_token
		})))
export { auth0_userinfo_ctx__ as auth0_userinfo_ctx$_ }
