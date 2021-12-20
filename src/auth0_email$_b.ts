import type { nullish } from '@ctx-core/function'
import type { Token } from '@ctx-core/jwt'
import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { auth0_userinfo$_b } from './auth0_userinfo$_b.js'
const key = 'auth0_email$'
export const auth0_email$_b:B<auth0_email$_T> = be_(key, ctx=>
	computed$(auth0_userinfo$_b(ctx), auth0_userinfo=>
		(auth0_userinfo === null)
		? null
		: (auth0_userinfo as Token)?.email
	) as auth0_email$_T)
export type auth0_email$_T = ReadableAtom$<string|nullish>
export {
	auth0_email$_b as b__email__auth0,
	auth0_email$_b as b__email,
}
