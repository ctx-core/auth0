import type { Ctx } from '@ctx-core/object'
import type { Auth0Error } from 'auth0-js'
export declare function auth0__passwordless_start__fetch_post(
	ctx:Ctx,
	body:auth0__passwordless_start__fetch_post__body_T
):Promise<[null|Auth0Error, Response]>
export {
	auth0__passwordless_start__fetch_post as post_auth0_passwordless_start,
}
//@formatter:off
/**
 * @see {@link https://auth0.com/docs/authenticate/passwordless/implement-login/embedded-login/relevant-api-endpoints#post-passwordless-start}
 */
export type auth0__passwordless_start__fetch_post__body_T = {
	client_id:string
	client_secret?:string
	connection:'email'|'sms'
	send:'link'|'code'
	authParams?:{
		scope?:'openid'|'openid profile email'
		state?:string
		redirect_uri?:string
	}
}&({
		connection:'email'
		email:string
	}
	|{
		connection:'sms'
		phone_number:string
	})
//@formatter:on
export declare type auth0__passwordless_start__fetch__body_T = auth0__passwordless_start__fetch_post__body_T
export declare type post_auth0_passwordless_start_body_T = auth0__passwordless_start__fetch_post__body_T
export declare type post_auth0_passwordless_start_T = typeof auth0__passwordless_start__fetch_post
