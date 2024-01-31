import type { fetch__template_pair_T } from 'ctx-core/fetch'
import type { JwtToken } from '@ctx-core/jwt'
import type { TokenResponse } from 'auth0'
import type { Auth0Error } from 'auth0-js'
import type { Ctx } from 'ctx-core/be'
import type { auth0__client_id__body_T, auth0__grant_type__body_T, auth0__login_data_T } from '../_types/index.js'
export declare const [
	auth0__oauth_token__POST__fetch,
	auth0__oauth_token__POST__fetch2
]:fetch__template_pair_T<
	[
		ctx:Ctx,
		body:auth0__oauth_token__fetch__body_T
	],
	(TokenResponse&JwtToken)|Auth0Error
>
export {
	auth0__oauth_token__POST__fetch2 as auth0__oauth_token__fetch_post,
	auth0__oauth_token__POST__fetch2 as post_auth0_oauth_token,
}
export interface auth0__secret__oauth_token__fetch__body_T
	extends auth0__grant_type__body_T, auth0__client_id__body_T {
	client_secret:string
	audience:string
}
export declare type post_auth0_oauth_token_T = typeof auth0__oauth_token__POST__fetch2
export declare type post_auth0_oauth_token_body_I = auth0__secret__oauth_token__fetch__body_T
/**
 * @see {@link https://auth0.com/docs/api/authentication#authenticate-user}
 * @see {@link https://auth0.com/docs/authenticate/passwordless/implement-login/embedded-login/relevant-api-endpoints}
 */
export interface auth0__passwordless__oauth_token__fetch__body_T {
	grant_type:'http://auth0.com/oauth/grant-type/passwordless/otp'
	client_id:string
	client_secret:string
	username:string
	realm:'email'|'sms'
	otp:string
	audience?:string
	scope?:'openid'|'openid profile email'
}
export interface auth0__password__oauth_token__fetch__body_T
	extends auth0__login_data_T {
	grant_type:'password'|'http://auth0.com/oauth/grant-type/password-realm'
	client_id:string
	client_secret:string
	username:string
	password:string
	audience:string
	scope?:'openid'|'openid profile email'
	connection:'Username-Password-Authentication',
	realm?:string
}
export type auth0__oauth_token__fetch__body_T =
	auth0__password__oauth_token__fetch__body_T
	|auth0__passwordless__oauth_token__fetch__body_T
	|auth0__login_data_T
export declare type login__auth0__oauth_token__fetch__body_T = auth0__oauth_token__fetch__body_T
