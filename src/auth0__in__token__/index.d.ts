import type { JwtToken } from '@ctx-core/jwt'
import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const auth0__in__token__:Be<ReadableAtom_<JwtToken>>
export {
	auth0__in__token__ as in_auth0_token__,
	auth0__in__token__ as in_auth0_token$_,
}
export declare function auth0__in__token_(ctx:Ctx):JwtToken
