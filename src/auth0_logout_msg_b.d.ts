import { B } from '@ctx-core/object';
import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const auth0_logout_msg_b: auth0_logout_msg_b_T;
export interface auth0_logout_msg_ctx_I {
    auth0_logout_msg?: auth0_logout_msg_T;
}
export interface $auth0_logout_msg_T {
    time: number;
}
export interface auth0_logout_msg_T extends Writable<maybe<$auth0_logout_msg_T>> {
    auth0_logout(): void;
}
export interface auth0_logout_msg_b_T extends B<auth0_logout_msg_T> {
}
export { auth0_logout_msg_b as b__msg__auth0_logout, };
