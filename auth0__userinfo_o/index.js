import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { auth0__userinfo_ } from '../auth0__userinfo/index.js'
import { auth0__userinfo_token_ } from '../auth0__userinfo_token/index.js'
export const [
	auth0__userinfo_o$_,
	auth0__userinfo_o_,
] = id_be_memo_pair_(
	'auth0__userinfo_o',
	ctx=>({
		auth0__userinfo: auth0__userinfo_(ctx),
		auth0__userinfo_token: auth0__userinfo_token_(ctx),
	}))
export {
	auth0__userinfo_o$_ as auth0__userinfo_o__,
	auth0__userinfo_o$_ as auth0_userinfo_ctx__,
	auth0__userinfo_o$_ as auth0_userinfo_ctx$_,
}
