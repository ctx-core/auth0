import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_logout_msg_b: import("@ctx-core/object").Be<auth0_Ctx, "auth0_logout_msg", auth0_logout_msg_T>;
export interface $auth0_logout_msg_T {
    time: number;
}
export interface auth0_logout_msg_T extends Writable<maybe<$auth0_logout_msg_T>> {
    auth0_logout(): void;
}
export { auth0_logout_msg_b as b__msg__auth0_logout, };
