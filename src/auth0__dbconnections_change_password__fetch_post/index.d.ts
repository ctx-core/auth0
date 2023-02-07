import type { Ctx } from '@ctx-core/object'
export declare function auth0__dbconnections_change_password__fetch_post(
	ctx:Ctx, body:auth0__dbconnections_change_password__fetch_T
):Promise<[string, Response]>
export {
	auth0__dbconnections_change_password__fetch_post as post_auth0_dbconnections_change_password,
}
export interface auth0__dbconnections_change_password__fetch_T {
	client_id:string
	email:string
	connection:string
}
export declare type post_auth0_dbconnections_change_password_body_T = auth0__dbconnections_change_password__fetch_T
