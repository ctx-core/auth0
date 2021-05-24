import { Writable } from '@ctx-core/store';
import type { $auth0_token_T } from './auth0_token_b';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_userinfo_auth0_token_b: (ctx: auth0_Ctx, opts?: import("@ctx-core/object")._be_opts_T) => auth0_userinfo_auth0_token_T;
export declare type $auth0_userinfo_auth0_token_T = $auth0_token_T | null;
export interface auth0_userinfo_auth0_token_T extends Writable<$auth0_userinfo_auth0_token_T> {
}
export { auth0_userinfo_auth0_token_b as b__auth0_userinfo_auth0_token, };
