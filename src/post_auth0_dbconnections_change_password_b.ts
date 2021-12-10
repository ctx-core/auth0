import { fetch } from '@ctx-core/fetch'
import { B, be_ } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'post_auth0_dbconnections_change_password'
export const post_auth0_dbconnections_change_password_b:B<post_auth0_dbconnections_change_password_T> = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return post_auth0_dbconnections_change_password as post_auth0_dbconnections_change_password_T
	function post_auth0_dbconnections_change_password(body:post_auth0_dbconnections_change_password_body_T) {
		const promise =
			fetch(
				`https://${AUTH0_DOMAIN$.$}/dbconnections/change_password`,
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
