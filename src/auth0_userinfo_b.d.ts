import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
import { auth0_token_ctx_I } from './auth0_token_b';
import { auth0_userinfo_auth0_token_ctx_I } from './auth0_userinfo_auth0_token_b';
export declare const auth0_userinfo_b: auth0_userinfo_b_T;
export interface auth0_userinfo_ctx_I extends AUTH0_DOMAIN_ctx_I, auth0_token_ctx_I, auth0_userinfo_auth0_token_ctx_I {
    auth0_userinfo?: auth0_userinfo_T;
}
export declare type $auth0_userinfo_T = Token;
export declare type $maybe_auth0_userinfo_T = $auth0_userinfo_T | null | boolean;
export interface auth0_userinfo_T extends Readable$<$maybe_auth0_userinfo_T> {
}
export interface auth0_userinfo_b_T extends B<auth0_userinfo_T> {
}
export { auth0_userinfo_b as b__auth0_userinfo, };
