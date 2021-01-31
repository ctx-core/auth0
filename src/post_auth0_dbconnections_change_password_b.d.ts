import { B } from '@ctx-core/object';
export declare const post_auth0_dbconnections_change_password_b: post_auth0_dbconnections_change_password_b_type;
export interface post_auth0_dbconnections_change_password_body_type {
    client_id: string;
    email: string;
    connection: string;
}
export declare type post_auth0_dbconnections_change_password_type = (body: post_auth0_dbconnections_change_password_body_type) => Promise<Response>;
export interface post_auth0_dbconnections_change_password_b_type extends B<post_auth0_dbconnections_change_password_type> {
}
