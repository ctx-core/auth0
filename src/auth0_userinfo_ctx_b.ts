import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { $auth0_userinfo_T, auth0_userinfo_b, auth0_userinfo_ctx_I } from './auth0_userinfo_b'
import {
	$auth0_userinfo_auth0_token_T, auth0_userinfo_auth0_token_b, auth0_userinfo_auth0_token_ctx_I
} from './auth0_userinfo_auth0_token_b'
export const auth0_userinfo_ctx_b:auth0_userinfo_ctx_b_T = _b('auth0_userinfo_ctx', (
	ctx:auth0_userinfo_ctx_ctx_I
)=>
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
export interface auth0_userinfo_ctx_ctx_I
	extends auth0_userinfo_ctx_I, auth0_userinfo_auth0_token_ctx_I {
	auth0_userinfo_ctx?:auth0_userinfo_ctx_T
}
export interface $auth0_userinfo_ctx_T {
	auth0_userinfo:$auth0_userinfo_T,
	auth0_userinfo_auth0_token:$auth0_userinfo_auth0_token_T,
}
export interface auth0_userinfo_ctx_T extends Readable<$auth0_userinfo_ctx_T> {}
export interface auth0_userinfo_ctx_b_T extends B<auth0_userinfo_ctx_T> {}
export {
	auth0_userinfo_ctx_b as b__ctx__auth0_userinfo
}
