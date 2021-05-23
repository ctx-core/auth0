import { Readable } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_login_opened_b: import("@ctx-core/object").Be<auth0_Ctx, "auth0_login_opened", auth0_login_opened_T>;
export declare type $auth0_login_opened_T = boolean;
export interface auth0_login_opened_T extends Readable<$auth0_login_opened_T> {
}
export { auth0_login_opened_b as login_opened };
