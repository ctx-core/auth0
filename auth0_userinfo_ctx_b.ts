import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { auth0_userinfo_b } from './auth0_userinfo_b'
import { auth0_userinfo_auth0_token_b } from './auth0_userinfo_auth0_token_b'
export const auth0_userinfo_ctx_b = _b('auth0_userinfo_ctx', ctx=>
	derived([
			auth0_userinfo_b(ctx),
			auth0_userinfo_auth0_token_b(ctx),
		],
		([$auth0_userinfo, $auth0_userinfo_auth0_token])=>(
			{
				auth0_userinfo: $auth0_userinfo,
				auth0_userinfo_auth0_token: $auth0_userinfo_auth0_token,
			}
		))
)
export {
	auth0_userinfo_ctx_b as b__ctx__auth0_userinfo
}
