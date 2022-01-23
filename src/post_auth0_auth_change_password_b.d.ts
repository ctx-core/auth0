import { B } from '@ctx-core/object'
export declare const post_auth0_auth_change_password_b:B<post_auth0_auth_change_password_T>
export declare type post_auth0_auth_change_password_T =
	(password:string)=>Promise<[auth_change_password_T, Response]>;
export interface auth_change_password_T {
	error?:string
}
