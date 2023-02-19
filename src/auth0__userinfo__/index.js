import { nullish__check_ } from '@ctx-core/function'
import { be_ } from '@ctx-core/object'
import { computed_ } from '@ctx-core/nanostores'
import { auth0__userinfo__response_pair__ } from '../auth0__userinfo__response_pair__/index.js'
/** @typedef {typeof import('@ctx-core/object').Ctx}Ctx */
/** @typedef {typeof import('../auth0__userinfo__fetch_get').auth0__userinfo_T}auth0__userinfo_T */
/** @type {typeof import('./index.d.ts').auth0__userinfo__} */
export const auth0__userinfo__ = be_('auth0__userinfo__', ctx=>
	computed_(
		auth0__userinfo__response_pair__(ctx),
		auth0__userinfo__response_pair=>
			nullish__check_([auth0__userinfo__response_pair], ()=>{
				const [payload] = auth0__userinfo__response_pair
				return (
					typeof payload === 'string' || 'error' in payload
					? null
					: payload)
			})))
export {
	auth0__userinfo__ as auth0_userinfo__,
	auth0__userinfo__ as auth0_userinfo$_,
}
