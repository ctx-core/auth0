import { B } from '@ctx-core/object';
import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
export declare const post_auth0_dbconnections_change_password_b: post_auth0_dbconnections_change_password_b_T;
export interface post_auth0_dbconnections_change_password_ctx_I extends AUTH0_DOMAIN_ctx_I {
    post_auth0_dbconnections_change_password?: post_auth0_dbconnections_change_password_T;
}
export interface post_auth0_dbconnections_change_password_body_T {
    client_id: string;
    email: string;
    connection: string;
}
export declare type post_auth0_dbconnections_change_password_T = (body: post_auth0_dbconnections_change_password_body_T) => Promise<Response>;
export interface post_auth0_dbconnections_change_password_b_T extends B<post_auth0_dbconnections_change_password_T> {
}
