import type { falsy } from '@ctx-core/function';
import type { $auth0_token_T } from './auth0_token_b';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const set_auth0_token_b: import("@ctx-core/object").Be<auth0_Ctx, "set_auth0_token", set_auth0_token_T>;
export declare type set_auth0_token_T = (auth0_token: $auth0_token_T | falsy) => void;
