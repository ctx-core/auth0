import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare function auth0_logout_msg_b(ctx?: any): auth_logout_msg_type;
export interface $type__msg__logout__auth0 {
    time: number;
}
export interface auth0_logout_msg_interface {
    logout__auth0(): void;
}
export declare type auth_logout_msg_type = Writable<maybe<$type__msg__logout__auth0>> & auth0_logout_msg_interface;
export declare type type__msg__logout__auth0 = auth_logout_msg_type;
export { auth0_logout_msg_b as b__msg__logout__auth0, };
