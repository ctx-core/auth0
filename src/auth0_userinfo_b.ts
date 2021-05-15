import { _b, B } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { waitfor_fibonacci_backoff } from '@ctx-core/fetch'
import type { Token } from '@ctx-core/jwt'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b'
import { auth0_token_b, auth0_token_ctx_I } from './auth0_token_b'
import { auth0_userinfo_auth0_token_b, auth0_userinfo_auth0_token_ctx_I } from './auth0_userinfo_auth0_token_b'
import { get_auth0_userinfo } from './get_auth0_userinfo'
export const auth0_userinfo_b:auth0_userinfo_b_T = _b('auth0_userinfo', (
	ctx:auth0_userinfo_ctx_I
)=>{
	const auth0_token = auth0_token_b(ctx)
	return derived$([
			AUTH0_DOMAIN_b(ctx),
			auth0_token,
			auth0_userinfo_auth0_token_b(ctx),
		],
		(
			[
				$AUTH0_DOMAIN,
				$auth0_token,
				$auth0_userinfo_auth0_token,
			],
			set
		)=>{
			(async ()=>{
				if ($auth0_token === $auth0_userinfo_auth0_token) {
					return
				}
				if (!$auth0_token) {
					set(_auth0_userinfo__no__token__auth0())
					return
				}
				set($auth0_token)
				const response =
					await waitfor_fibonacci_backoff(()=>
						get_auth0_userinfo({
							auth0_token: $auth0_token,
							AUTH0_DOMAIN: $AUTH0_DOMAIN,
						}))
				if (!response.ok) {
					auth0_token.clear_auth0_token(false)
					set(false)
					return
				}
				const auth0_userinfo = await response.json()
				set(auth0_userinfo)
			})()
			function _auth0_userinfo__no__token__auth0() {
				return (
					$auth0_token == null
					? null
					: false
				)
			}
		}
	) as auth0_userinfo_T
})
export interface auth0_userinfo_ctx_I
	extends AUTH0_DOMAIN_ctx_I, auth0_token_ctx_I, auth0_userinfo_auth0_token_ctx_I {
	auth0_userinfo?:auth0_userinfo_T
}
export type $auth0_userinfo_T = Token
export type $maybe_auth0_userinfo_T = $auth0_userinfo_T|null|boolean
export interface auth0_userinfo_T extends Readable$<$maybe_auth0_userinfo_T> {}
export interface auth0_userinfo_b_T extends B<auth0_userinfo_T> {}
export {
	auth0_userinfo_b as b__auth0_userinfo,
}
