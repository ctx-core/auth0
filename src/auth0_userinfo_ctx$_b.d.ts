import type { Token } from 'auth0';
import type { nullish } from '@ctx-core/function';
import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import { auth0_userinfo_auth0_token_T } from './auth0_userinfo_auth0_token$_b';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "auth0_userinfo_ctx$";
export declare const auth0_userinfo_ctx$_b: B<auth0_Ctx, typeof key>;
export interface auth0_userinfo_ctx_T {
    auth0_userinfo: Token | nullish;
    auth0_userinfo_auth0_token: auth0_userinfo_auth0_token_T;
}
export interface auth0_userinfo_ctx$_T extends Readable$<auth0_userinfo_ctx_T> {
}
export { auth0_userinfo_ctx$_b as b__ctx__auth0_userinfo };
