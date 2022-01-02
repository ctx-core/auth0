import { B } from '@ctx-core/object'
export declare const post_auth0_dbconnections_change_password_b:B<post_auth0_dbconnections_change_password_T>
export interface post_auth0_dbconnections_change_password_body_T {
	client_id:string;
	email:string;
	connection:string;
}
export declare type post_auth0_dbconnections_change_password_T = (body:post_auth0_dbconnections_change_password_body_T)=>Promise<Response>;
