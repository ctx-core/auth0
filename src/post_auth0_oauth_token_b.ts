import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I'
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I'
export const post_auth0_oauth_token_b:post_auth0_oauth_token_b_T = _b('post_auth0_oauth_token', (
	ctx:post_auth0_oauth_token_ctx_I
)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return function post_auth0_oauth_token(body:post_auth0_oauth_token_body_I) {
		return (
			fetch(`https://${get(AUTH0_DOMAIN)}/oauth/token`, {
				method: 'POST',
				headers:
					{ 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
		)
	}
})
export interface post_auth0_oauth_token_ctx_I extends AUTH0_DOMAIN_ctx_I {
	post_auth0_oauth_token?:post_auth0_oauth_token_T
}
export interface post_auth0_oauth_token_body_I
	extends auth0_grant_type_body_I, auth0_client_id_body_I {
	client_secret:string
	audience:string
}
export type post_auth0_oauth_token_T = (body:post_auth0_oauth_token_body_I)=>Promise<Response>
export interface post_auth0_oauth_token_b_T extends B<post_auth0_oauth_token_T> {}
