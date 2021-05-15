import { B } from '@ctx-core/object';
import { $auth0_token_error_T, auth0_token_error_ctx_I } from './auth0_token_error_b';
import { logout_auth0_token_ctx_I } from './logout_auth0_token_b';
export declare const logout_auth0_token_error_b: logout_auth0_token_error_b_T;
export interface logout_auth0_token_error_ctx_I extends auth0_token_error_ctx_I, logout_auth0_token_ctx_I {
    logout_auth0_token_error?: logout_auth0_token_error_T;
}
export declare type logout_auth0_token_error_T = (error: $auth0_token_error_T | null) => void;
export interface logout_auth0_token_error_b_T extends B<logout_auth0_token_error_T> {
}
