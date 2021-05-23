import type { auth0_Ctx } from './auth0_Ctx';
export declare const post_auth0_dbconnections_change_password_b: import("@ctx-core/object").Be<auth0_Ctx, "post_auth0_dbconnections_change_password", post_auth0_dbconnections_change_password_T>;
export interface post_auth0_dbconnections_change_password_body_T {
    client_id: string;
    email: string;
    connection: string;
}
export declare type post_auth0_dbconnections_change_password_T = (body: post_auth0_dbconnections_change_password_body_T) => Promise<Response>;
