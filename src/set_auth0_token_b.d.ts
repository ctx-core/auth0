import type { falsy } from '@ctx-core/function';
import { B } from '@ctx-core/object';
import type { auth0_token_T } from './auth0_token$_b';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "set_auth0_token";
export declare const set_auth0_token_b: B<auth0_Ctx, typeof key>;
export declare type set_auth0_token_T = (auth0_token: auth0_token_T | falsy) => void;
export {};
