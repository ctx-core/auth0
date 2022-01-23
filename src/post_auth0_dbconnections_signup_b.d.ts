import { B } from '@ctx-core/object'
import type { UserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { auth0_client_id_body_I } from './_types'
export declare const post_auth0_dbconnections_signup_b:B<post_auth0_dbconnections_signup_T>
export interface post_auth0_dbconnections_signup_body_T extends auth0_client_id_body_I {
	client_id:string;
	grant_type:string;
	realm:string;
	connection:string;
	email:string;
	password:string;
}
export declare type post_auth0_dbconnections_signup_T =
	(body:post_auth0_dbconnections_signup_body_T)=>Promise<[UserData|Auth0Error, Response]>
