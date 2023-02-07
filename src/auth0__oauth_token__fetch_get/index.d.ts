import type { Ctx } from '@ctx-core/object'
import type { TokenResponse } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { auth0__client_id__body_T, auth0__grant_type__body_T } from '../_types'
export declare function auth0__oauth_token__fetch_get(
	ctx:Ctx, body:auth0__oauth_token__fetch__body_T
):Promise<[TokenResponse|Auth0Error, Response]>
export {
	auth0__oauth_token__fetch_get as post_auth0_oauth_token,
}
export interface auth0__oauth_token__fetch__body_T extends auth0__grant_type__body_T, auth0__client_id__body_T {
	client_secret:string;
	audience:string;
}
export declare type post_auth0_oauth_token_body_I = auth0__oauth_token__fetch__body_T
export declare type post_auth0_oauth_token_T = typeof auth0__oauth_token__fetch_get
