import type { nullish } from '@ctx-core/function'
import type { be_computed_pair_T, ReadableAtom_ } from '@ctx-core/nanostores'
import type { Token } from 'auth0'
import type { auth0__userinfo_token_T } from '../auth0__userinfo_token__'
export const [
	auth0__userinfo_o__,
	auth0__userinfo_o_,
]:be_computed_pair_T<
	ReadableAtom_<auth0_userinfo_o_T>
>
export {
	auth0__userinfo_o__ as auth0__userinfo_ctx__,
	auth0__userinfo_o__ as auth0_userinfo_ctx__,
	auth0__userinfo_o__ as auth0_userinfo_ctx$_,
}
export interface auth0_userinfo_o_T {
	auth0_userinfo:Token|nullish
	auth0_userinfo_auth0_token:auth0__userinfo_token_T
}
export declare type auth0_userinfo_ctx_T = auth0_userinfo_o_T
