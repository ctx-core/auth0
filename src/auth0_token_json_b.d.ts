import type { falsy } from '@ctx-core/function';
import { Writable$ } from '@ctx-core/store';
export interface auth0_token_json_Ctx {
    auth0_token_json?: auth0_token_json_T;
}
export declare const auth0_token_json_b: import("@ctx-core/object").Be<auth0_token_json_Ctx, "auth0_token_json">;
export declare type $auth0_token_json_T = string | falsy;
export interface auth0_token_json_T extends Writable$<$auth0_token_json_T> {
}
export { auth0_token_json_b as b__json__token__auth0, };
