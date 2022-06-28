import { type Ctx } from '@ctx-core/object'
export declare function post_auth0_auth_change_password(
	ctx:Ctx, password:string
):Promise<[auth_change_password_T, Response]>
export declare type post_auth0_auth_change_password_T = typeof post_auth0_auth_change_password
export interface auth_change_password_T {
	error?:string
}
