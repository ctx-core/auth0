import { type Ctx } from '@ctx-core/object'
export declare function post_auth0_dbconnections_change_password(
	ctx:Ctx, body:post_auth0_dbconnections_change_password_body_T
):Promise<[string, Response]>
export interface post_auth0_dbconnections_change_password_body_T {
	client_id:string
	email:string
	connection:string
}
