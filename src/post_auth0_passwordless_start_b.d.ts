import { B } from '@ctx-core/object';
import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I';
export declare const post_auth0_passwordless_start_b: post_auth0_passwordless_start_b_T;
export interface post_auth0_passwordless_start_ctx_I extends AUTH0_DOMAIN_ctx_I {
    post_auth0_passwordless_start?: post_auth0_passwordless_start_T;
}
export interface post_auth0_passwordless_start_optional_body_T extends auth0_client_id_optional_body_I {
    connection: string;
    send: string;
    email: string;
}
export interface post_auth0_passwordless_start_body_T extends post_auth0_passwordless_start_optional_body_T {
    client_id: string;
}
export declare type post_auth0_passwordless_start_T = (body: post_auth0_passwordless_start_body_T) => Promise<Response>;
export interface post_auth0_passwordless_start_b_T extends B<post_auth0_passwordless_start_T> {
}
