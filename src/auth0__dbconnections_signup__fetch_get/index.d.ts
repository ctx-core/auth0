import type { Ctx } from '@ctx-core/object'
import type { UserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { auth0__client_id__body_T, auth0__signup_data_T } from '../_types'
export declare function auth0__dbconnections_signup__fetch_get(
	ctx:Ctx, body:auth0__dbconnections_signup__fetch__body_T
):Promise<[UserData|Auth0Error, Response]>
export {
	auth0__dbconnections_signup__fetch_get as post_auth0_dbconnections_signup,
}
export interface auth0__secret__dbconnections_signup__fetch__body_T extends auth0__client_id__body_T {
	client_id:string
	grant_type:string
	realm:string
	connection:string
	email:string
	password:string
}
export type auth0__dbconnections_signup__fetch__body_T =
	auth0__secret__dbconnections_signup__fetch__body_T
	|auth0__signup_data_T
export declare type post_auth0_dbconnections_signup_body_T = auth0__dbconnections_signup__fetch__body_T
export declare type post_auth0_dbconnections_signup_T = typeof auth0__dbconnections_signup__fetch_get
