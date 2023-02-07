import { waitfor_fibonacci_backoff } from '@ctx-core/fetch-undici'
import { be_ } from '@ctx-core/object'
import { setter_computed_ } from '@ctx-core/nanostores'
import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
import { auth0__token__ } from '../auth0__token__/index.js'
import { auth0__userinfo_token__ } from '../auth0__userinfo_token__/index.js'
import { auth0__token__clear } from '../auth0__token__clear/index.js'
import { auth0__userinfo__fetch_get } from '../auth0__userinfo__fetch_get/index.js'
/** @type {typeof import('./index.d.ts').auth0__userinfo__} */
export const auth0__userinfo__ = be_('auth0__userinfo__', ctx=>
	setter_computed_([
		AUTH0_DOMAIN__(ctx), auth0__token__(ctx), auth0__userinfo_token__(ctx),
	], ([AUTH0_DOMAIN, auth0_token, auth0_userinfo_auth0_token,], set)=>{
		if (auth0_token === auth0_userinfo_auth0_token) {
			return
		}
		if (!auth0_token) {
			set(auth0_token === undefined ? undefined : null)
			return
		}
		set(auth0_token)
		/** @type {import('./auth0__userinfo__fetch_get.d.ts').get_auth0_userinfo_T} */
		let auth0_userinfo
		waitfor_fibonacci_backoff(
			async ()=>{
				const [_auth0_userinfo, response] = await auth0__userinfo__fetch_get({ auth0_token, AUTH0_DOMAIN })
				auth0_userinfo = _auth0_userinfo
				return response
			}
		).then(response=>{
			if (!response.ok) {
				auth0__token__clear(ctx)
				set(null)
				return
			}
			set(auth0_userinfo)
		})
	}))
export {
	auth0__userinfo__ as auth0_userinfo__,
	auth0__userinfo__ as auth0_userinfo$_,
}
