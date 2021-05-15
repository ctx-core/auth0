import { B } from '@ctx-core/object';
import { auth0_opened_ctx_I } from './auth0_opened_b';
export declare const open_auth0_signup_b: open_auth0_signup_b_T;
export interface open_auth0_signup_ctx_I extends auth0_opened_ctx_I {
    open_auth0_signup?: open_auth0_signup_T;
}
export declare type open_auth0_signup_T = () => void;
export interface open_auth0_signup_b_T extends B<open_auth0_signup_T> {
}
