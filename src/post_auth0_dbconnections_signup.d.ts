import type { UserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { Ctx } from '@ctx-core/object'
import type { auth0_client_id_body_I } from './_types'
export declare function post_auth0_dbconnections_signup(
	ctx:Ctx, body:post_auth0_dbconnections_signup_body_T
):Promise<[UserData|Auth0Error, Response]>
export interface post_auth0_dbconnections_signup_body_T extends auth0_client_id_body_I {
	client_id:string
	grant_type:string
	realm:string
	connection:string
	email:string
	password:string
}
export declare type post_auth0_dbconnections_signup_T = typeof post_auth0_dbconnections_signup
