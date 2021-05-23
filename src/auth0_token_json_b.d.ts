import type { falsy } from '@ctx-core/function';
import { Writable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_token_json_b: import("@ctx-core/object").Be<auth0_Ctx, "auth0_token_json", auth0_token_json_T>;
export declare type $auth0_token_json_T = string | falsy;
export interface auth0_token_json_T extends Writable$<$auth0_token_json_T> {
}
export { auth0_token_json_b as b__json__token__auth0, };
