import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "auth0_token_error$";
export declare const auth0_token_error$_b: B<auth0_Ctx, typeof key>;
export interface auth0_token_error_I {
    message?: string;
    error_message?: string;
    error_description?: string;
    error?: any;
    email?: string;
    password?: string;
}
export declare type auth0_token_error_T = auth0_token_error_I | undefined;
export interface auth0_token_error$_T extends Writable$<auth0_token_error_T> {
}
export { auth0_token_error$_b as b__error__token__auth0, };
