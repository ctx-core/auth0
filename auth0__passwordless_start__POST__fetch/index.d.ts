import type { fetch__template_pair_T } from 'ctx-core/fetch'
import type { Auth0Error } from 'auth0-js'
import type { ctx_T } from 'ctx-core/be'
export declare const [
	auth0__passwordless_start__POST__fetch,
	auth0__passwordless_start__POST__fetch2,
]:fetch__template_pair_T<
	[
		ctx:ctx_T,
		body:auth0__passwordless_start__POST__fetch2__body_T
	],
	null|Auth0Error
>
export {
	auth0__passwordless_start__POST__fetch2 as auth0__passwordless_start__fetch_post,
	auth0__passwordless_start__POST__fetch2 as post_auth0_passwordless_start,
}
//@formatter:off
/**
 * @see {@link https://auth0.com/docs/authenticate/passwordless/implement-login/embedded-login/relevant-api-endpoints#post-passwordless-start}
 */
export type auth0__passwordless_start__POST__fetch2__body_T = {
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
export declare type auth0__passwordless_start__fetch__body_T =
	auth0__passwordless_start__POST__fetch2__body_T
export declare type post_auth0_passwordless_start_body_T =
	auth0__passwordless_start__POST__fetch2__body_T
export declare type post_auth0_passwordless_start_T =
	typeof auth0__passwordless_start__POST__fetch2
