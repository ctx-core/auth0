import { B } from '@ctx-core/object';
import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const auth0_logout_msg_b: auth0_logout_msg_b_type;
export interface $auth0_logout_msg_type {
    time: number;
}
export interface auth0_logout_msg_type extends Writable<maybe<$auth0_logout_msg_type>> {
    auth0_logout(): void;
}
export interface auth0_logout_msg_b_type extends B<auth0_logout_msg_type> {
}
export { auth0_logout_msg_type as type__msg__auth0_logout, auth0_logout_msg_b as b__msg__auth0_logout, };
