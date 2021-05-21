import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
export interface post_auth0_dbconnections_signup_ctx_I extends AUTH0_DOMAIN_ctx_I {
    post_auth0_dbconnections_signup?: post_auth0_dbconnections_signup_T;
}
export declare const post_auth0_dbconnections_signup_b: import("@ctx-core/object").Be<post_auth0_dbconnections_signup_ctx_I, "post_auth0_dbconnections_signup">;
export interface post_auth0_dbconnections_signup_body_T extends auth0_client_id_body_I {
    client_id: string;
    grant_type: string;
    realm: string;
    connection: string;
    email: string;
    password: string;
}
export declare type post_auth0_dbconnections_signup_T = (body: post_auth0_dbconnections_signup_body_T) => Promise<Response>;
