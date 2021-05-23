import type { auth0_Ctx } from './auth0_Ctx';
export declare const post_auth0_auth_change_password_b: import("@ctx-core/object").Be<auth0_Ctx, "post_auth0_auth_change_password", post_auth0_auth_change_password_T>;
export declare type post_auth0_auth_change_password_T = (password: string) => Promise<Response>;
