import type { nullish } from '@ctx-core/function';
import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "auth0_token_json$";
export declare const auth0_token_json$_b: B<auth0_Ctx, typeof key>;
export declare type auth0_token_json_T = string | nullish;
export interface auth0_token_json$_T extends Writable$<auth0_token_json_T> {
}
export { auth0_token_json$_b as b__json__token__auth0, };
