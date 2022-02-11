import { has_dom } from '@ctx-core/dom'
import { neql_atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const localStorage_key = 'auth0_token_json'
/** @type {import('./auth0_token_json$_.d.ts').auth0_token_json$_} */
export const auth0_token_json$_ = be_('auth0_token_json$', ()=>{
	const auth0_token_json$ = neql_atom$(has_dom && localStorage.getItem(localStorage_key) || null)
	if (has_dom) {
		auth0_token_json$.listen($=>
			localStorage.setItem(localStorage_key, $))
	}
	return auth0_token_json$
})
