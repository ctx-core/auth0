import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
import type { auth0_grant_type_body_type } from './auth0_grant_type_body_type'
export const post_auth0_oauth_token_b:post_auth0_oauth_token_b_type = _b('post_auth0_oauth_token', (ctx)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return post_auth0_oauth_token
	function post_auth0_oauth_token(body:post_auth0_oauth_token_body_type) {
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
export interface post_auth0_oauth_token_body_type extends auth0_grant_type_body_type {}
export type post_auth0_oauth_token_type =
	(body:post_auth0_oauth_token_body_type)=>Promise<Response>
export interface post_auth0_oauth_token_b_type extends B<post_auth0_oauth_token_type> {}
