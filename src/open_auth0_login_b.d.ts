import { B } from '@ctx-core/object';
import { auth0_opened_ctx_I } from './auth0_opened_b';
export declare const open_auth0_login_b: open_auth0_login_b_T;
export interface open_auth0_login_I extends auth0_opened_ctx_I {
    open_auth0_login?: open_auth0_login_T;
}
export declare type open_auth0_login_T = () => void;
export interface open_auth0_login_b_T extends B<open_auth0_login_T> {
}
