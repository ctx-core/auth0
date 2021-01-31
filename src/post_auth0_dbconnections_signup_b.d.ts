import { B } from '@ctx-core/object';
import type { auth0_client_id_body_type } from './auth0_client_id_body_type';
export declare const post_auth0_dbconnections_signup_b: post_auth0_dbconnections_signup_b_type;
export interface post_auth0_dbconnections_signup_body_type extends auth0_client_id_body_type {
    client_id: string;
    grant_type: string;
    realm: string;
    connection: string;
    email: string;
    password: string;
}
export declare type post_auth0_dbconnections_signup_type = (body: post_auth0_dbconnections_signup_body_type) => Promise<Response>;
export interface post_auth0_dbconnections_signup_b_type extends B<post_auth0_dbconnections_signup_type> {
}
