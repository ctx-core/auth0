import { B } from '@ctx-core/object';
import type { auth0_client_id_optional_body_type } from './auth0_client_id_body_type';
export declare const post_auth0_passwordless_start_b: post_auth0_passwordless_start_b_type;
export interface post_auth0_passwordless_start_optional_body_type extends auth0_client_id_optional_body_type {
    connection: string;
    send: string;
    email: string;
}
export interface post_auth0_passwordless_start_body_type extends post_auth0_passwordless_start_optional_body_type {
    client_id: string;
}
export declare type post_auth0_passwordless_start_type = (body: post_auth0_passwordless_start_body_type) => Promise<Response>;
export interface post_auth0_passwordless_start_b_type extends B<post_auth0_passwordless_start_type> {
}
