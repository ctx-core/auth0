import { auth0_token_ctx_I } from './auth0_token_b';
import { _verify_id_token_header_authorization_ctx_I } from './_verify_id_token_header_authorization_b';
export interface post_auth0_auth_change_password_ctx_I extends auth0_token_ctx_I, _verify_id_token_header_authorization_ctx_I {
    post_auth0_auth_change_password?: post_auth0_auth_change_password_T;
}
export declare const post_auth0_auth_change_password_b: import("@ctx-core/object").Be<post_auth0_auth_change_password_ctx_I, "post_auth0_auth_change_password">;
export declare type post_auth0_auth_change_password_T = (password: string) => Promise<Response>;
