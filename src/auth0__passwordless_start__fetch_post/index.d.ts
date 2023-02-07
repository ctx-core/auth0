import type { Ctx } from '@ctx-core/object'
import type { Auth0Error } from 'auth0-js'
import type { auth0__client_id__optional_body_T } from '../_types'
export declare function auth0__passwordless_start__fetch_post(
	ctx:Ctx, body:auth0__passwordless_start__fetch__body_T
):Promise<[null|Auth0Error, Response]>
export {
	auth0__passwordless_start__fetch_post as post_auth0_passwordless_start,
}
export interface auth0__passwordless_start__fetch__optional_body_T extends auth0__client_id__optional_body_T {
	connection:string
	send:string
	email:string
}
export declare type post_auth0_passwordless_start_optional_body_T = auth0__passwordless_start__fetch__optional_body_T
export interface auth0__passwordless_start__fetch__body_T extends auth0__passwordless_start__fetch__optional_body_T {
	client_id:string
}
export declare type post_auth0_passwordless_start_body_T = auth0__passwordless_start__fetch__body_T
export declare type post_auth0_passwordless_start_T = typeof auth0__passwordless_start__fetch_post
