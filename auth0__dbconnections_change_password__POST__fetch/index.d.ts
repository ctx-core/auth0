import type { fetch__template_pair_T } from '@ctx-core/fetch'
import type { Auth0Error } from 'auth0-js'
import type { Ctx } from 'ctx-core/be'
export declare const [
	auth0__dbconnections_change_password__POST__fetch,
	auth0__dbconnections_change_password__POST__fetch2
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		body:auth0__dbconnections_change_password__fetch_T
	],
	string|Auth0Error
>
export {
	auth0__dbconnections_change_password__POST__fetch2 as auth0__dbconnections_change_password__fetch_post,
	auth0__dbconnections_change_password__POST__fetch2 as post_auth0_dbconnections_change_password,
}
export interface auth0__dbconnections_change_password__fetch_T {
	client_id:string
	email:string
	connection:string
}
export declare type post_auth0_dbconnections_change_password_body_T = auth0__dbconnections_change_password__fetch_T
