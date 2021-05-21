import { auth0_opened_ctx_I } from './auth0_opened_b';
export interface open_auth0_signup_ctx_I extends auth0_opened_ctx_I {
    open_auth0_signup?: open_auth0_signup_T;
}
export declare const open_auth0_signup_b: import("@ctx-core/object").Be<open_auth0_signup_ctx_I, "open_auth0_signup">;
export declare type open_auth0_signup_T = () => void;
