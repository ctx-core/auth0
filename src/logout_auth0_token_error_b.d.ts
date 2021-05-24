import { $auth0_token_error_T } from './auth0_token_error_b';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const logout_auth0_token_error_b: (ctx: auth0_Ctx, opts?: import("@ctx-core/object")._be_opts_T) => logout_auth0_token_error_T;
export declare type logout_auth0_token_error_T = (error: $auth0_token_error_T | null) => void;
