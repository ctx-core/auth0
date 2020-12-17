import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare function auth0_logout_msg_b(ctx?: any): auth_logout_msg_type;
export interface $type__msg__logout__auth0 {
    time: number;
}
export interface auth0_logout_msg_interface {
    logout__auth0(): void;
}
export interface auth_logout_msg_type extends Writable<maybe<$type__msg__logout__auth0>>, auth0_logout_msg_interface {
}
export { auth_logout_msg_type as type__msg__logout__auth0, auth0_logout_msg_b as b__msg__logout__auth0, };
