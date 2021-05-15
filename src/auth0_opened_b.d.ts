import { B } from '@ctx-core/object';
import { Writable } from '@ctx-core/store';
import { auth0_email_ctx_I } from './auth0_email_b';
export declare const auth0_opened_b: auth0_opened_b_T;
export interface auth0_opened_ctx_I extends auth0_email_ctx_I {
    auth0_opened?: auth0_opened_T;
}
export declare type $auth0_opened_T = string | false | null;
export interface auth0_opened_T extends Writable<$auth0_opened_T> {
    open_auth0_change_password: () => void;
    reload_auth0_opened: () => void;
}
export interface auth0_opened_b_T extends B<auth0_opened_T> {
}
export { auth0_opened_b as b__opened__auth0, };
