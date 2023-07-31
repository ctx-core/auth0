import type { nullish } from '@ctx-core/function'
import type { JwtToken } from '@ctx-core/jwt'
import type { be_computed_pair_T, ReadableAtom_ } from '@ctx-core/nanostores'
export declare const [
	auth0__token$_,
	auth0__token_,
]:be_computed_pair_T<
	ReadableAtom_<JwtToken|nullish>
>
export {
	auth0__token$_ as auth0__token__,
	auth0__token$_ as auth0_token__,
	auth0__token$_ as auth0_token$_,
}