import { B } from '@ctx-core/object';
import { logout_auth0_token_error_ctx_I } from './logout_auth0_token_error_b';
export interface clear_auth0_token_error_ctx_I extends logout_auth0_token_error_ctx_I {
    clear_auth0_token_error?: clear_auth0_token_error_T;
}
export declare const clear_auth0_token_error_b: import("@ctx-core/object").Be<clear_auth0_token_error_ctx_I, "clear_auth0_token_error">;
export declare type clear_auth0_token_error_T = () => void;
export interface clear_auth0_token_error_b_T extends B<clear_auth0_token_error_T> {
}
