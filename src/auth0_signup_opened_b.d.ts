import { Readable } from '@ctx-core/store';
import { auth0_opened_ctx_I } from './auth0_opened_b';
export interface auth0_signup_opened_ctx_I extends auth0_opened_ctx_I {
    auth0_signup_opened?: auth0_signup_opened_T;
}
export declare const auth0_signup_opened_b: import("@ctx-core/object").Be<auth0_signup_opened_ctx_I, "auth0_signup_opened">;
export declare type $auth0_signup_opened_T = boolean;
export interface auth0_signup_opened_T extends Readable<$auth0_signup_opened_T> {
}
export { auth0_signup_opened_b as b__opened__signup, };
