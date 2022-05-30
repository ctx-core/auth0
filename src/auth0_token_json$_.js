import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_error$_ } from './auth0_token_error$_.js'
const localStorage_key = 'auth0_token_json'
/** @type {import('./auth0_token_json$_.d.ts').auth0_token_json$_} */
export const auth0_token_json$_ = be_('auth0_token_json$', ctx=>{
	const auth0_token_json$ = atom_(has_dom && localStorage.getItem(localStorage_key) || null)
	auth0_token_error$_(ctx).subscribe($error=>{
		if ($error) auth0_token_json$.$ = 'null'
	})
	if (has_dom) {
		auth0_token_json$.listen($=>
			localStorage.setItem(localStorage_key, $))
	}
	return auth0_token_json$
})
