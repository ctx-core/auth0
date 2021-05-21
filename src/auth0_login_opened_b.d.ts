import { Readable } from '@ctx-core/store';
import { auth0_opened_Ctx } from './auth0_opened_b';
export interface auth0_login_opened_Ctx extends auth0_opened_Ctx {
    auth0_login_opened?: auth0_login_opened_T;
}
export declare const auth0_login_opened_b: import("@ctx-core/object").Be<auth0_login_opened_Ctx, "auth0_login_opened">;
export declare type $auth0_login_opened_T = boolean;
export interface auth0_login_opened_T extends Readable<$auth0_login_opened_T> {
}
export { auth0_login_opened_b as login_opened };
