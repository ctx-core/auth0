import type { nullish } from '@ctx-core/function'
import type { be_computed_pair_T, ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { auth0__userinfo_T } from '../_types'
export declare const [
	auth0__userinfo$_,
	auth0__userinfo_,
]:be_computed_pair_T<
	ReadableAtom_<auth0__userinfo_T>
>
export {
	auth0__userinfo$_ as auth0__userinfo__,
	auth0__userinfo$_ as auth0_userinfo__,
	auth0__userinfo$_ as auth0_userinfo$_,
}
export declare function auth0__userinfo__set(
	ctx:Ctx,
	auth0__userinfo:auth0__userinfo_T|nullish
):void
