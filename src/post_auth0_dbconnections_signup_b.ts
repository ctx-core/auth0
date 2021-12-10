import { fetch } from '@ctx-core/fetch'
import { B, be_ } from '@ctx-core/object'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I.js'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'post_auth0_dbconnections_signup'
export const post_auth0_dbconnections_signup_b:B<post_auth0_dbconnections_signup_T> = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return post_auth0_dbconnections_signup as post_auth0_dbconnections_signup_T
	// https://auth0.com/docs/libraries/custom-signup
	function post_auth0_dbconnections_signup(body:post_auth0_dbconnections_signup_body_T) {
		return (
			fetch(
				`https://${AUTH0_DOMAIN$.$}/dbconnections/signup`,
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
