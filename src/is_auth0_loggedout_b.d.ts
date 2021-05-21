import { Readable } from '@ctx-core/store';
import { auth0_token_ctx_I } from './auth0_token_b';
export interface is_auth0_loggedout_ctx_I extends auth0_token_ctx_I {
    is_auth0_loggedout?: is_auth0_loggedout_T;
}
export declare const is_auth0_loggedout_b: import("@ctx-core/object").Be<is_auth0_loggedout_ctx_I, "is_auth0_loggedout">;
export declare type $is_auth0_loggedout_T = boolean;
export interface is_auth0_loggedout_T extends Readable<$is_auth0_loggedout_T> {
}
export { is_auth0_loggedout_b as b__is__loggedout__auth0, };
