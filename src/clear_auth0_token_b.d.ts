import type { falsy } from '@ctx-core/function';
import { set_auth0_token_ctx_I } from './set_auth0_token_b';
export interface clear_auth0_token_ctx_I extends set_auth0_token_ctx_I {
    clear_auth0_token?: clear_auth0_token_T;
}
export declare const clear_auth0_token_b: import("@ctx-core/object").Be<clear_auth0_token_ctx_I, "clear_auth0_token">;
export declare type clear_auth0_token_T = (value?: falsy) => void;
