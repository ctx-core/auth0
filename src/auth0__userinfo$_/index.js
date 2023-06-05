import { nullish__check_ } from '@ctx-core/function'
import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__userinfo__response_pair$_ } from '../auth0__userinfo__response_pair$_/index.js'
/** @typedef {typeof import('@ctx-core/object').Ctx}Ctx */
/** @typedef {typeof import('../auth0__userinfo__GET__fetch2').auth0__userinfo_T}auth0__userinfo_T */
export const [
	auth0__userinfo$_,
	auth0__userinfo_,
] = be_computed_pair_(ctx=>
	computed_(
		auth0__userinfo__response_pair$_(ctx),
		auth0__userinfo__response_pair=>
			nullish__check_([auth0__userinfo__response_pair], ()=>{
				const [payload] = auth0__userinfo__response_pair
				return (
					typeof payload === 'string' || 'error' in payload
					? null
					: payload)
			})))
export {
	auth0__userinfo$_ as auth0__userinfo__,
	auth0__userinfo$_ as auth0_userinfo__,
	auth0__userinfo$_ as auth0_userinfo$_,
}
