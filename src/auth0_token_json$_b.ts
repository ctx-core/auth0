import { has_dom } from '@ctx-core/dom'
import type { nullish } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx.js'
const key = 'auth0_token_json$'
export const auth0_token_json$_b:B<auth0_Ctx, typeof key> = be_(key, _ctx=>{
	const auth_token_json$ = writable$<string|nullish>(
		(has_dom && localStorage.getItem(key)) || null)
	return auth_token_json$ as auth0_token_json$_T
})
export type auth0_token_json$_T = Writable$<string|nullish>
export {
	auth0_token_json$_b as b__json__token__auth0,
}
