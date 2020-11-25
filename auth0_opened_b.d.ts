import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const auth0_opened_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type) => auth0_opened_type;
export declare type $auth0_opened_type = maybe<string>;
export interface auth0_opened_type extends Writable<$auth0_opened_type> {
    open_auth0_change_password: () => void;
    reload_auth0_opened: () => void;
}
export { auth0_opened_b as b__opened__auth0, $auth0_opened_type as $type__opened__auth0, auth0_opened_type as type__opened__auth0, };
