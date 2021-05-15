import { B } from '@ctx-core/object';
import type { falsy } from '@ctx-core/function';
import { set_auth0_token_ctx_I } from './set_auth0_token_b';
export declare const clear_auth0_token_b: clear_auth0_token_b_type;
export interface clear_auth0_token_ctx_I extends set_auth0_token_ctx_I {
    clear_auth0_token?: clear_auth0_token_T;
}
export declare type clear_auth0_token_T = (value?: falsy) => void;
export interface clear_auth0_token_b_type extends B<clear_auth0_token_T> {
}
