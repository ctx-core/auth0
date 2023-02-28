import type { nullish } from '@ctx-core/function'
import type { JwtToken } from '@ctx-core/jwt'
import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const auth0__token__:Be<ReadableAtom_<JwtToken|nullish>>
export {
	auth0__token__ as auth0_token__,
	auth0__token__ as auth0_token$_,
}
export declare function auth0__token_(ctx:Ctx):JwtToken|nullish
