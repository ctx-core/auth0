import type { $auth0_token_T } from './auth0_token_b';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const _verify_id_token_header_authorization_b: (ctx: auth0_Ctx, opts?: import("@ctx-core/object")._be_opts_T) => _verify_id_token_header_authorization_T;
export declare type _verify_id_token_header_authorization_T = ($auth0_token: $auth0_token_T) => Promise<string>;
