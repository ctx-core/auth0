import { B } from '@ctx-core/object';
import { auth0_opened_ctx_I } from './auth0_opened_b';
export declare const close_auth0_b: close_auth0_b_T;
export interface close_auth0_ctx_I extends auth0_opened_ctx_I {
    close_auth0?: close_auth0_T;
}
export declare type close_auth0_T = () => void;
export interface close_auth0_b_T extends B<close_auth0_T> {
}
