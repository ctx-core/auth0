import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { $auth0_userinfo_T, auth0_userinfo_b, auth0_userinfo_Ctx } from './auth0_userinfo_b'
import {
	$auth0_userinfo_auth0_token_T, auth0_userinfo_auth0_token_b, auth0_userinfo_auth0_token_Ctx
} from './auth0_userinfo_auth0_token_b'
const key = 'auth0_userinfo_ctx'
export interface auth0_userinfo_ctx_Ctx
	extends auth0_userinfo_Ctx,
		auth0_userinfo_auth0_token_Ctx {
	auth0_userinfo_ctx?:auth0_userinfo_ctx_T
}
export const auth0_userinfo_ctx_b = _b<auth0_userinfo_ctx_Ctx, typeof key>(key, ctx=>
	derived([
			auth0_userinfo_b(ctx),
			auth0_userinfo_auth0_token_b(ctx),
		],
		([$auth0_userinfo, $auth0_userinfo_auth0_token])=>(
			{
				auth0_userinfo: $auth0_userinfo,
				auth0_userinfo_auth0_token: $auth0_userinfo_auth0_token,
			}
		)
	) as auth0_userinfo_ctx_T)
export interface $auth0_userinfo_ctx_T {
	auth0_userinfo:$auth0_userinfo_T,
	auth0_userinfo_auth0_token:$auth0_userinfo_auth0_token_T,
}
export interface auth0_userinfo_ctx_T extends Readable<$auth0_userinfo_ctx_T> {}
export interface auth0_userinfo_ctx_b_T extends B<auth0_userinfo_ctx_T> {}
export {
	auth0_userinfo_ctx_b as b__ctx__auth0_userinfo
}
