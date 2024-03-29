import type { Auth0Error } from 'auth0-js'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
export declare const [
	auth0__token__error$_,
	auth0__token__error_,
	auth0__token__error__set,
]:be_sig_triple_T<auth0__token__error_T>
export {
	auth0__token__error$_ as auth0__token__error__,
	auth0__token__error$_ as auth0_token_error__,
	auth0__token__error$_ as auth0_token_error$_,
}
export declare type auth0__token__error_T = Auth0Error&{
	username?:string
	password?:string
	password_confirmation?:string
}
export declare type auth0_token_error_T = auth0__token__error_T
