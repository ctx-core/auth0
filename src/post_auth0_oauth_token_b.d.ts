import { B } from '@ctx-core/object';
import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I';
export declare const post_auth0_oauth_token_b: post_auth0_oauth_token_b_T;
export interface post_auth0_oauth_token_ctx_I extends AUTH0_DOMAIN_ctx_I {
    post_auth0_oauth_token?: post_auth0_oauth_token_T;
}
export interface post_auth0_oauth_token_body_I extends auth0_grant_type_body_I, auth0_client_id_body_I {
    client_secret: string;
    audience: string;
}
export declare type post_auth0_oauth_token_T = (body: post_auth0_oauth_token_body_I) => Promise<Response>;
export interface post_auth0_oauth_token_b_T extends B<post_auth0_oauth_token_T> {
}
