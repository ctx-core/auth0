import type { nullish } from '@ctx-core/function'
import type { JwtToken } from '@ctx-core/jwt'
import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be } from '@ctx-core/object'
export declare const auth0__token__:Be<ReadableAtom_<JwtToken|nullish>>
export declare type auth0__token_T = JwtToken
export {
	auth0__token__ as auth0_token__,
	auth0__token__ as auth0_token$_,
	auth0__token_T as auth0_token_T,
}
