import type { fetch__template_pair_T } from 'ctx-core/fetch'
import type { Ctx } from 'ctx-core/be'
export declare const [
	auth0__change_password__POST__fetch,
	auth0__change_password__POST__fetch2
]:fetch__template_pair_T<
	[ctx:Ctx, password:string],
	auth_change_password_T
>
export {
	auth0__change_password__POST__fetch2 as auth0__change_password__fetch_post,
	auth0__change_password__POST__fetch2 as post_auth0_auth_change_password,
}
export declare type auth0__change_password__fetch_T =
	typeof auth0__change_password__POST__fetch2
export declare type upost_auth0_auth_change_password_T =
	auth0__change_password__fetch_T
export interface auth_change_password_T {
	error?:string
}
