import { B } from '@ctx-core/object';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "post_auth0_dbconnections_change_password";
export declare const post_auth0_dbconnections_change_password_b: B<auth0_Ctx, typeof key>;
export interface post_auth0_dbconnections_change_password_body_T {
    client_id: string;
    email: string;
    connection: string;
}
export declare type post_auth0_dbconnections_change_password_T = (body: post_auth0_dbconnections_change_password_body_T) => Promise<Response>;
export {};
