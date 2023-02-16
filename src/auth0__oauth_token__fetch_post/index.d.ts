import type { Ctx } from '@ctx-core/object'
import type { TokenResponse } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { auth0__client_id__body_T, auth0__grant_type__body_T, auth0__login_data_T } from '../_types'
export declare function auth0__oauth_token__fetch_post(
	ctx:Ctx, body:auth0__oauth_token__fetch__body_T
):Promise<[TokenResponse|Auth0Error, Response]>
export {
	auth0__oauth_token__fetch_post as post_auth0_oauth_token,
}
export interface auth0__secret__oauth_token__fetch__body_T extends auth0__grant_type__body_T, auth0__client_id__body_T {
	client_secret:string
	audience:string
}
export type auth0__oauth_token__fetch__body_T =
	auth0__secret__oauth_token__fetch__body_T
	|login__auth0__oauth_token__fetch__body_T
export declare type post_auth0_oauth_token_T = typeof auth0__oauth_token__fetch_post
export declare type post_auth0_oauth_token_body_I = auth0__secret__oauth_token__fetch__body_T
export interface login__auth0__oauth_token__fetch__body_T extends auth0__login_data_T {
	client_id:string
	client_secret:string
	grant_type:string
	audience?:string
	connection?:string
	realm?:string
}
