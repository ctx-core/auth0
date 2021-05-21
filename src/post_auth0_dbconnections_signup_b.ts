import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I'
const key = 'post_auth0_dbconnections_signup'
export interface post_auth0_dbconnections_signup_ctx_I
	extends AUTH0_DOMAIN_ctx_I {
	post_auth0_dbconnections_signup?:post_auth0_dbconnections_signup_T
}
export const post_auth0_dbconnections_signup_b = _b<post_auth0_dbconnections_signup_ctx_I, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return post_auth0_dbconnections_signup as post_auth0_dbconnections_signup_T
	function post_auth0_dbconnections_signup(body:post_auth0_dbconnections_signup_body_T) {
		return (
			fetch(
				`https://${get(AUTH0_DOMAIN)}/dbconnections/signup`,
				{
					method: 'POST',
					headers:
						{ 'Content-Type': 'application/json' },
					body: JSON.stringify(body)
				})
		)
	}
})
export interface post_auth0_dbconnections_signup_body_T extends auth0_client_id_body_I {
	client_id:string
	grant_type:string
	realm:string
	connection:string
	email:string
	password:string
}
export type post_auth0_dbconnections_signup_T = (body:post_auth0_dbconnections_signup_body_T)=>Promise<Response>
