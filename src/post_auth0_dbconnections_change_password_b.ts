import { _b } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b'
const key = 'post_auth0_dbconnections_change_password'
export interface post_auth0_dbconnections_change_password_ctx_I
	extends AUTH0_DOMAIN_ctx_I {
	post_auth0_dbconnections_change_password?:post_auth0_dbconnections_change_password_T
}
export const post_auth0_dbconnections_change_password_b = _b<post_auth0_dbconnections_change_password_ctx_I, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return post_auth0_dbconnections_change_password as post_auth0_dbconnections_change_password_T
	function post_auth0_dbconnections_change_password(body:post_auth0_dbconnections_change_password_body_T) {
		const promise =
			fetch(
				`https://${get(AUTH0_DOMAIN)}/dbconnections/change_password`,
				{
					method: 'POST',
					headers:
						{ 'Content-Type': 'application/json' },
					body: JSON.stringify(body)
				})
		return promise
	}
})
export interface post_auth0_dbconnections_change_password_body_T {
	client_id:string
	email:string
	connection:string
}
export type post_auth0_dbconnections_change_password_T =
	(body:post_auth0_dbconnections_change_password_body_T)=>Promise<Response>
