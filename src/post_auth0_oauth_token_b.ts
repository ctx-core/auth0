import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I'
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'post_auth0_oauth_token'
export const post_auth0_oauth_token_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return function post_auth0_oauth_token(body:post_auth0_oauth_token_body_I) {
		return (
			fetch(`https://${AUTH0_DOMAIN$._}/oauth/token`, {
				method: 'POST',
				headers:
					{ 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
		)
	}
})
export interface post_auth0_oauth_token_body_I
	extends auth0_grant_type_body_I, auth0_client_id_body_I {
	client_secret:string
	audience:string
}
export type post_auth0_oauth_token_T = (body:post_auth0_oauth_token_body_I)=>Promise<Response>
