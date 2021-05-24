import type { auth0_Ctx } from './auth0_Ctx';
export declare const post_auth0_auth_change_password_b: (ctx: auth0_Ctx, opts?: import("@ctx-core/object")._be_opts_T) => post_auth0_auth_change_password_T;
export declare type post_auth0_auth_change_password_T = (password: string) => Promise<Response>;
