import { B } from '@ctx-core/object';
import type { falsy } from '@ctx-core/function';
import { Writable$ } from '@ctx-core/store';
export declare const auth0_token_json_b: auth0_token_json_b_T;
export interface auth0_token_json_ctx_I {
    auth0_token_json?: auth0_token_json_T;
}
export declare type $auth0_token_json_T = string | falsy;
export interface auth0_token_json_T extends Writable$<$auth0_token_json_T> {
}
export interface auth0_token_json_b_T extends B<auth0_token_json_T> {
}
export { auth0_token_json_b as b__json__token__auth0, };
