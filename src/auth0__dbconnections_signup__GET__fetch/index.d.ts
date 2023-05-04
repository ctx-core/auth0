import type { fetch__template_pair_T } from '@ctx-core/fetch'
import type { Ctx } from '@ctx-core/object'
import type { UserData } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { auth0__client_id__body_T, auth0__signup_data_T } from '../_types'
export declare const [
	auth0__dbconnections_signup__GET__fetch,
	auth0__dbconnections_signup__GET__fetch2
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		body:auth0__dbconnections_signup__fetch__body_T
	],
	UserData|Auth0Error
>
export {
	auth0__dbconnections_signup__GET__fetch as auth0__dbconnections_signup__fetch_get,
	auth0__dbconnections_signup__GET__fetch as post_auth0_dbconnections_signup,
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
export declare type post_auth0_dbconnections_signup_T = typeof auth0__dbconnections_signup__GET__fetch
