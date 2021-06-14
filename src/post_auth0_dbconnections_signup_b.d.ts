import { B } from '@ctx-core/object';
import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "post_auth0_dbconnections_signup";
export declare const post_auth0_dbconnections_signup_b: B<auth0_Ctx, typeof key>;
export interface post_auth0_dbconnections_signup_body_T extends auth0_client_id_body_I {
    client_id: string;
    grant_type: string;
    realm: string;
    connection: string;
    email: string;
    password: string;
}
export declare type post_auth0_dbconnections_signup_T = (body: post_auth0_dbconnections_signup_body_T) => Promise<Response>;
export {};
