import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { auth0__token_T } from '../_types'
export declare const auth0__userinfo_token__:Be<WritableAtom_<auth0__userinfo_token_T>>
export {
	auth0__userinfo_token__ as auth0_userinfo_auth0_token__,
	auth0__userinfo_token__ as auth0_userinfo_auth0_token$_,
}
export declare function auth0__userinfo_token_(
	ctx:Ctx
):auth0__userinfo_token_T
export declare function auth0__userinfo_token__set(
	ctx:Ctx,
	auth0__userinfo_token:auth0__userinfo_token_T
):void
export declare type auth0__userinfo_token_T = auth0__token_T|undefined
