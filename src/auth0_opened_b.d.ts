import { Writable } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_opened_b: import("@ctx-core/object").Be<auth0_Ctx, "auth0_opened", auth0_opened_T>;
export declare type $auth0_opened_T = string | false | null;
export interface auth0_opened_T extends Writable<$auth0_opened_T> {
    open_auth0_change_password: () => void;
    reload_auth0_opened: () => void;
}
export { auth0_opened_b as b__opened__auth0, };
