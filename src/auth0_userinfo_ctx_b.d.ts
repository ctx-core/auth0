import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
import { $auth0_userinfo_T } from './auth0_userinfo_b';
import { $auth0_userinfo_auth0_token_T } from './auth0_userinfo_auth0_token_b';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_userinfo_ctx_b: import("@ctx-core/object").Be<auth0_Ctx, "auth0_userinfo_ctx", auth0_userinfo_ctx_T>;
export interface $auth0_userinfo_ctx_T {
    auth0_userinfo: $auth0_userinfo_T;
    auth0_userinfo_auth0_token: $auth0_userinfo_auth0_token_T;
}
export interface auth0_userinfo_ctx_T extends Readable<$auth0_userinfo_ctx_T> {
}
export interface auth0_userinfo_ctx_b_T extends B<auth0_userinfo_ctx_T> {
}
export { auth0_userinfo_ctx_b as b__ctx__auth0_userinfo };
