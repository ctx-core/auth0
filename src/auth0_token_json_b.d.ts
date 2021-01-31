import { B } from '@ctx-core/object';
import type { falsy } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const auth0_token_json_b: auth0_token_json_b_type;
export declare type $auth0_token_json_type = string | falsy;
export interface auth0_token_json_type extends Writable<$auth0_token_json_type> {
}
export interface auth0_token_json_b_type extends B<auth0_token_json_type> {
}
export { auth0_token_json_b as b__json__token__auth0, auth0_token_json_type as type__json__token__auth0, };
