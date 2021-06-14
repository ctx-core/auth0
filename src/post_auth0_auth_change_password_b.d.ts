import { B } from '@ctx-core/object';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "post_auth0_auth_change_password";
export declare const post_auth0_auth_change_password_b: B<auth0_Ctx, typeof key>;
export declare type post_auth0_auth_change_password_T = (password: string) => Promise<Response>;
export {};
