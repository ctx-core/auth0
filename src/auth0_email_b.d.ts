import { Readable } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
import { auth0_userinfo_Ctx } from './auth0_userinfo_b';
export interface auth0_email_Ctx extends auth0_userinfo_Ctx {
    auth0_email?: auth0_email_T;
}
export declare const auth0_email_b: import("@ctx-core/object").Be<auth0_email_Ctx, "auth0_email", auth0_email_T>;
export declare type $auth0_email_T = Token | false;
export interface auth0_email_T extends Readable<$auth0_email_T> {
}
export { auth0_email_b as b__email__auth0, auth0_email_b as b__email, };
