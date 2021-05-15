import { B } from '@ctx-core/object';
import { auth0_token_json_ctx_I } from './auth0_token_json_b';
import type { $auth0_token_T } from './auth0_token_b';
import type { falsy } from '@ctx-core/function';
export declare const set_auth0_token_b: set_auth0_token_b_type;
export interface set_auth0_token_ctx_I extends auth0_token_json_ctx_I {
    set_auth0_token?: set_auth0_token_T;
}
export declare type set_auth0_token_T = (auth0_token: $auth0_token_T | falsy) => void;
export interface set_auth0_token_b_type extends B<set_auth0_token_T> {
}
