import { AUTH0_DOMAIN_Ctx } from './AUTH0_DOMAIN_b';
import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I';
export interface post_auth0_oauth_token_Ctx extends AUTH0_DOMAIN_Ctx {
    post_auth0_oauth_token?: post_auth0_oauth_token_T;
}
export declare const post_auth0_oauth_token_b: import("@ctx-core/object").Be<post_auth0_oauth_token_Ctx, "post_auth0_oauth_token">;
export interface post_auth0_oauth_token_body_I extends auth0_grant_type_body_I, auth0_client_id_body_I {
    client_secret: string;
    audience: string;
}
export declare type post_auth0_oauth_token_T = (body: post_auth0_oauth_token_body_I) => Promise<Response>;
