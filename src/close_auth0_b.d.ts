import { auth0_opened_ctx_I } from './auth0_opened_b';
export interface close_auth0_ctx_I extends auth0_opened_ctx_I {
    close_auth0?: close_auth0_T;
}
export declare const close_auth0_b: import("@ctx-core/object").Be<close_auth0_ctx_I, "close_auth0">;
export declare type close_auth0_T = () => void;
