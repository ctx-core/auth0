import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'post_auth0_dbconnections_signup'
export const post_auth0_dbconnections_signup_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
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
