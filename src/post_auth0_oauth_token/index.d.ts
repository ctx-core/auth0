import type { Ctx } from '@ctx-core/object'
import type { TokenResponse } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { auth0_client_id_body_I, auth0_grant_type_body_I } from '../_types'
export declare function post_auth0_oauth_token(
	ctx:Ctx, body:post_auth0_oauth_token_body_I
):Promise<[TokenResponse|Auth0Error, Response]>
export interface post_auth0_oauth_token_body_I extends auth0_grant_type_body_I, auth0_client_id_body_I {
	client_secret:string;
	audience:string;
}
export declare type post_auth0_oauth_token_T = typeof post_auth0_oauth_token
