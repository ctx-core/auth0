import type { nullish } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import type { Token } from '@ctx-core/jwt'
import { auth0_userinfo$_b } from './auth0_userinfo$_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_email$'
export const auth0_email$_b = _b<auth0_Ctx, typeof key>(key, ctx=>
	derived$(auth0_userinfo$_b(ctx), auth0_userinfo=>
		(auth0_userinfo === null)
		? null
		: auth0_userinfo && (auth0_userinfo as Token).email
	) as auth0_email$_T)
export type auth0_email_T = Token|nullish
export interface auth0_email$_T extends Readable$<auth0_email_T> {}
export {
	auth0_email$_b as b__email__auth0,
	auth0_email$_b as b__email,
}