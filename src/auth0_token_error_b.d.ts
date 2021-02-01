import { B } from '@ctx-core/object';
import { Writable } from '@ctx-core/store';
export declare const auth0_token_error_b: auth0_token_error_b_type;
export interface $auth0_token_error_I {
    message?: string;
    error_message?: string;
    error_description?: string;
    error?: any;
    email?: string;
    password?: string;
}
export declare type $auth0_token_error_type = $auth0_token_error_I | null;
export interface auth0_token_error_type extends Writable<$auth0_token_error_type> {
}
export interface auth0_token_error_b_type extends B<auth0_token_error_type> {
}
export { auth0_token_error_b as b__error__token__auth0, };
