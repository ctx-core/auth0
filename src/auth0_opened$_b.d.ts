import type { nullish } from '@ctx-core/function';
import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "auth0_opened$";
export declare const auth0_opened$_b: B<auth0_Ctx, typeof key>;
export declare type auth0_opened_T = string | nullish;
export interface auth0_opened$_T extends Writable$<auth0_opened_T> {
    open_auth0_change_password: () => void;
    reload_auth0_opened: () => void;
}
export { auth0_opened$_b as b__opened__auth0, };
