import { _b, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
import type { auth0_client_id_body_type } from './auth0_client_id_body_type'
export const post_auth0_dbconnections_signup_b:post_auth0_dbconnections_signup_b_type = _b('post_auth0_dbconnections_signup', (ctx)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return post_auth0_dbconnections_signup as post_auth0_dbconnections_signup_type
	function post_auth0_dbconnections_signup(body:post_auth0_dbconnections_signup_body_type) {
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
export interface post_auth0_dbconnections_signup_body_type extends auth0_client_id_body_type {
	client_id:string
	grant_type:string
	realm:string
	connection:string
	email:string
	password:string
}
export type post_auth0_dbconnections_signup_type = (body:post_auth0_dbconnections_signup_body_type)=>Promise<Response>
export interface post_auth0_dbconnections_signup_b_type extends B<post_auth0_dbconnections_signup_type> {}
