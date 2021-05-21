import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
export interface post_auth0_dbconnections_change_password_ctx_I extends AUTH0_DOMAIN_ctx_I {
    post_auth0_dbconnections_change_password?: post_auth0_dbconnections_change_password_T;
}
export declare const post_auth0_dbconnections_change_password_b: import("@ctx-core/object").Be<post_auth0_dbconnections_change_password_ctx_I, "post_auth0_dbconnections_change_password">;
export interface post_auth0_dbconnections_change_password_body_T {
    client_id: string;
    email: string;
    connection: string;
}
export declare type post_auth0_dbconnections_change_password_T = (body: post_auth0_dbconnections_change_password_body_T) => Promise<Response>;
