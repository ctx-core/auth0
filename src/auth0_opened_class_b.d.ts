import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import { $auth0_opened_T, auth0_opened_ctx_I } from './auth0_opened_b';
export declare const auth0_opened_class_b: auth0_opened_class_b_T;
export interface auth0_opened_class_ctx_I extends auth0_opened_ctx_I {
    auth0_opened_class?: auth0_opened_class_T;
}
export declare type $auth0_opened_class_T = $auth0_opened_T;
export interface auth0_opened_class_T extends Readable$<$auth0_opened_class_T> {
}
export interface auth0_opened_class_b_T extends B<auth0_opened_class_T> {
}
export { auth0_opened_class_b as b__class__opened__auth0, };
