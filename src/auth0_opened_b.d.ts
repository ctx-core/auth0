import { B } from '@ctx-core/object';
import { Writable } from '@ctx-core/store';
export declare const auth0_opened_b: auth0_opened_b_type;
export declare type $auth0_opened_type = string | false | null;
export interface auth0_opened_type extends Writable<$auth0_opened_type> {
    open_auth0_change_password: () => void;
    reload_auth0_opened: () => void;
}
export interface auth0_opened_b_type extends B<auth0_opened_type> {
}
export { auth0_opened_b as b__opened__auth0, };
