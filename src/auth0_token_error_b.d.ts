import { Writable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_token_error_b: (ctx: auth0_Ctx, opts?: import("@ctx-core/object")._be_opts_T) => auth0_token_error_T;
export interface $auth0_token_error_I {
    message?: string;
    error_message?: string;
    error_description?: string;
    error?: any;
    email?: string;
    password?: string;
}
export declare type $auth0_token_error_T = $auth0_token_error_I | null;
export interface auth0_token_error_T extends Writable$<$auth0_token_error_T> {
}
export { auth0_token_error_b as b__error__token__auth0, };
