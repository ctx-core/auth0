import { B } from '@ctx-core/object'
import type { TokenResponse } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { auth0_client_id_body_I, auth0_grant_type_body_I } from './_types'
export declare const post_auth0_oauth_token_b:B<post_auth0_oauth_token_T>
export interface post_auth0_oauth_token_body_I extends auth0_grant_type_body_I, auth0_client_id_body_I {
	client_secret:string;
	audience:string;
}
export declare type post_auth0_oauth_token_T =
	(body:post_auth0_oauth_token_body_I)=>Promise<[TokenResponse|Auth0Error, Response]>;
