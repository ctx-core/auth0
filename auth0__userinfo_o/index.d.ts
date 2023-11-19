import type { nullish } from '@ctx-core/function'
import type { be_computed_pair_T } from '@ctx-core/nanostores'
import type { Token } from 'auth0'
import type { auth0__userinfo_token_T } from '../auth0__userinfo_token/index.js'
export const [
	auth0__userinfo_o$_,
	auth0__userinfo_o_,
]:be_computed_pair_T<auth0__userinfo_o_T>
export {
	auth0__userinfo_o$_ as auth0__userinfo_o__,
	auth0__userinfo_o$_ as auth0__userinfo_ctx__,
	auth0__userinfo_o$_ as auth0_userinfo_ctx__,
	auth0__userinfo_o$_ as auth0_userinfo_ctx$_,
}
export interface auth0__userinfo_o_T {
	auth0__userinfo:Token|nullish
	auth0__userinfo_token:auth0__userinfo_token_T
}
export declare type auth0_userinfo_ctx_T = auth0__userinfo_o_T
