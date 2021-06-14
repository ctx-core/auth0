import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "auth0_logout_msg$";
export declare const auth0_logout_msg$_b: B<auth0_Ctx, typeof key>;
export interface auth0_logout_msg_T {
    time: number;
}
export interface auth0_logout_msg$_T extends Writable$<auth0_logout_msg_T | undefined> {
    auth0_logout(): void;
}
export { auth0_logout_msg$_b as b__msg__auth0_logout, };
