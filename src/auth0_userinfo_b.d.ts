import { Readable$ } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
import { AUTH0_DOMAIN_Ctx } from './AUTH0_DOMAIN_b';
import { auth0_token_Ctx } from './auth0_token_b';
import { auth0_userinfo_auth0_token_Ctx } from './auth0_userinfo_auth0_token_b';
export interface auth0_userinfo_Ctx extends AUTH0_DOMAIN_Ctx, auth0_token_Ctx, auth0_userinfo_auth0_token_Ctx {
    auth0_userinfo?: auth0_userinfo_T;
}
export declare const auth0_userinfo_b: import("@ctx-core/object").Be<auth0_userinfo_Ctx, "auth0_userinfo", auth0_userinfo_T>;
export declare type $auth0_userinfo_T = Token;
export declare type $maybe_auth0_userinfo_T = $auth0_userinfo_T | null | boolean;
export interface auth0_userinfo_T extends Readable$<$maybe_auth0_userinfo_T> {
}
export { auth0_userinfo_b as b__auth0_userinfo, };
