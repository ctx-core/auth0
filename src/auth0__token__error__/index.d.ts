import type { be_atom_triple_T, WritableAtom_ } from '@ctx-core/nanostores'
import type { Auth0Error } from 'auth0-js'
export declare const [
	auth0__token__error__,
	auth0__token__error_,
]:be_atom_triple_T<
	auth0__token__error_T,
	WritableAtom_<auth0__token__error_T>
>
export {
	auth0__token__error__ as auth0_token_error__,
	auth0__token__error__ as auth0_token_error$_,
}
export declare type auth0__token__error_T = Auth0Error&{
	username?:string
	password?:string
	password_confirmation?:string
}
export declare type auth0_token_error_T = auth0__token__error_T
