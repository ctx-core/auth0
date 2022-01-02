import { has_dom } from '@ctx-core/dom'
import { be_ } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
const key = 'auth0_token_json$'
/** @type {import('./auth0_token_json$_b.d.ts').auth0_token_json$_b} */
export const auth0_token_json$_b = be_(key, (_ctx)=>{
	const auth_token_json$ = atom$(has_dom && localStorage.getItem(key) || null)
	return auth_token_json$
})
export { auth0_token_json$_b as b__json__token__auth0, }
//# sourceMappingURL=auth0_token_json$_b.js.map
