import { auth0_opened_ctx_I } from './auth0_opened_b';
export interface open_auth0_forgot_password_ctx_I extends auth0_opened_ctx_I {
    open_auth0_forgot_password?: open_auth0_forgot_password_T;
}
export declare const open_auth0_forgot_password_b: import("@ctx-core/object").Be<open_auth0_forgot_password_ctx_I, "open_auth0_forgot_password">;
export declare type open_auth0_forgot_password_T = () => void;
