import { has_dom } from '@ctx-core/dom'
import type { nullish } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
const key = 'auth0_token_json$'
export const auth0_token_json$_b:B<auth0_token_json$_T> = be_(key, _ctx=>{
	const auth_token_json$ = atom$<string|nullish>(
		(has_dom && localStorage.getItem(key)) || null)
	return auth_token_json$ as auth0_token_json$_T
})
export type auth0_token_json$_T = WritableAtom$<string|nullish>
export {
	auth0_token_json$_b as b__json__token__auth0,
}
