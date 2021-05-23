import { Readable$ } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_userinfo_b: import("@ctx-core/object").Be<auth0_Ctx, "auth0_userinfo", auth0_userinfo_T>;
export declare type $auth0_userinfo_T = Token;
export declare type $maybe_auth0_userinfo_T = $auth0_userinfo_T | null | boolean;
export interface auth0_userinfo_T extends Readable$<$maybe_auth0_userinfo_T> {
}
export { auth0_userinfo_b as b__auth0_userinfo, };
