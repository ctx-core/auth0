import type { falsy } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const auth0_token_json_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type) => auth0_token_json_type;
export declare type set_auth0_token_type = (auth0_token: any) => void;
export declare type clear_auth0_token_type = (value?: falsy) => void;
export declare type logout_auth0_token_type = () => void;
export declare type $auth0_token_json_type = string | falsy;
export interface auth0_token_json_type extends Writable<$auth0_token_json_type> {
}
export { auth0_token_json_b as b__json__token__auth0, auth0_token_json_type as type__json__token__auth0, };
