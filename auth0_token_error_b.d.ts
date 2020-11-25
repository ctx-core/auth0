import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const auth0_token_error_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type) => auth0_token_error_type;
export interface $auth0_token_error_type {
    message?: string;
    error_message?: string;
    error_description?: string;
    error?: any;
}
export declare type $maybe_auth0_token_error_type = maybe_null<$auth0_token_error_type>;
export interface auth0_token_error_type extends Writable<$maybe_auth0_token_error_type> {
}
export { auth0_token_error_b as b__error__token__auth0, auth0_token_error_type as type__error__token__auth0 };
