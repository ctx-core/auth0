import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const post_auth0_oauth_token_b: import("@ctx-core/object").Be<auth0_Ctx, "post_auth0_oauth_token", post_auth0_oauth_token_T>;
export interface post_auth0_oauth_token_body_I extends auth0_grant_type_body_I, auth0_client_id_body_I {
    client_secret: string;
    audience: string;
}
export declare type post_auth0_oauth_token_T = (body: post_auth0_oauth_token_body_I) => Promise<Response>;
