import { tup } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__userinfo__ } from '../auth0__userinfo__/index.js'
import { auth0__userinfo_token__ } from '../auth0__userinfo_token__/index.js'
/** @type {typeof import('./index.d.ts').auth0__userinfo_o__} */
export const auth0__userinfo_o__ = be_('auth0__userinfo_o__',
	ctx=>computed_(
		tup(auth0__userinfo__(ctx), auth0__userinfo_token__(ctx)),
		(auth0_userinfo, auth0_userinfo_auth0_token)=>({
			auth0_userinfo,
			auth0_userinfo_auth0_token
		})))
export {
	auth0__userinfo_o__ as auth0_userinfo_ctx__,
	auth0__userinfo_o__ as auth0_userinfo_ctx$_,
}
