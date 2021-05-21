import type { falsy } from '@ctx-core/function';
import { auth0_token_json_ctx_I } from './auth0_token_json_b';
import type { $auth0_token_T } from './auth0_token_b';
export interface set_auth0_token_ctx_I extends auth0_token_json_ctx_I {
    set_auth0_token?: set_auth0_token_T;
}
export declare const set_auth0_token_b: import("@ctx-core/object").Be<set_auth0_token_ctx_I, "set_auth0_token">;
export declare type set_auth0_token_T = (auth0_token: $auth0_token_T | falsy) => void;
