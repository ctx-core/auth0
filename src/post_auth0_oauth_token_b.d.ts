import { B } from '@ctx-core/object';
import type { auth0_grant_type_body_type } from './auth0_grant_type_body_type';
export declare const post_auth0_oauth_token_b: post_auth0_oauth_token_b_type;
export interface post_auth0_oauth_token_body_type extends auth0_grant_type_body_type {
}
export declare type post_auth0_oauth_token_type = (body: post_auth0_oauth_token_body_type) => Promise<Response>;
export interface post_auth0_oauth_token_b_type extends B<post_auth0_oauth_token_type> {
}
