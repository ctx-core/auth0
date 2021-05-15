import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
import { auth0_opened_ctx_I } from './auth0_opened_b';
export declare const auth0_change_password_opened_b: auth0_change_password_opened_b_T;
export interface auth0_change_password_opened_ctx_I extends auth0_opened_ctx_I {
    auth0_change_password_opened?: auth0_change_password_opened_T;
}
export declare type $auth0_change_password_opened_T = boolean;
export interface auth0_change_password_opened_T extends Readable<$auth0_change_password_opened_T> {
}
export interface auth0_change_password_opened_b_T extends B<auth0_change_password_opened_T> {
}
export { auth0_change_password_opened_b as b__opened__change_password, };
