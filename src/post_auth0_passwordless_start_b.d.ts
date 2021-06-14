import { B } from '@ctx-core/object';
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "post_auth0_passwordless_start";
export declare const post_auth0_passwordless_start_b: B<auth0_Ctx, typeof key>;
export interface post_auth0_passwordless_start_optional_body_T extends auth0_client_id_optional_body_I {
    connection: string;
    send: string;
    email: string;
}
export interface post_auth0_passwordless_start_body_T extends post_auth0_passwordless_start_optional_body_T {
    client_id: string;
}
export declare type post_auth0_passwordless_start_T = (body: post_auth0_passwordless_start_body_T) => Promise<Response>;
export {};
