import { tup } from '@ctx-core/array'
import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__userinfo$_ } from '../auth0__userinfo/index.js'
import { auth0__userinfo_token$_ } from '../auth0__userinfo_token/index.js'
export const [
	auth0__userinfo_o$_,
	auth0__userinfo_o_,
] = be_computed_pair_(ctx=>
	computed_(
		tup(auth0__userinfo$_(ctx), auth0__userinfo_token$_(ctx)),
		(auth0_userinfo, auth0_userinfo_auth0_token)=>({
			auth0_userinfo,
			auth0_userinfo_auth0_token
		})))
export {
	auth0__userinfo_o$_ as auth0__userinfo_o__,
	auth0__userinfo_o$_ as auth0_userinfo_ctx__,
	auth0__userinfo_o$_ as auth0_userinfo_ctx$_,
}
