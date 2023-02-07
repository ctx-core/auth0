import type { Ctx } from '@ctx-core/object'
export declare function auth0__change_password__fetch_post(
	ctx:Ctx, password:string
):Promise<[auth_change_password_T, Response]>
export {
	auth0__change_password__fetch_post as post_auth0_auth_change_password,
}
export declare type auth0__change_password__fetch_T = typeof auth0__change_password__fetch_post
export declare type post_auth0_auth_change_password_T = auth0__change_password__fetch_T
export interface auth_change_password_T {
	error?:string
}
