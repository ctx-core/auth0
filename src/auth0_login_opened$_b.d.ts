import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "auth0_login_opened$";
export declare const auth0_login_opened$_b: B<auth0_Ctx, typeof key>;
export declare type auth0_login_opened_T = boolean;
export interface auth0_login_opened$_T extends Readable$<auth0_login_opened_T> {
}
export { auth0_login_opened$_b as login_opened };
