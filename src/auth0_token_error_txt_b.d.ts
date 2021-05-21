import { Readable } from '@ctx-core/store';
import { auth0_token_error_ctx_I } from './auth0_token_error_b';
export interface auth0_token_error_txt_ctx_I extends auth0_token_error_ctx_I {
    auth0_token_error_txt?: auth0_token_error_txt_T;
}
export declare const auth0_token_error_txt_b: import("@ctx-core/object").Be<auth0_token_error_txt_ctx_I, "auth0_token_error_txt">;
export declare type $auth0_token_error_txt_T = string;
export interface auth0_token_error_txt_T extends Readable<$auth0_token_error_txt_T> {
}
export { auth0_token_error_txt_b as b__txt__error__token__auth0, };
