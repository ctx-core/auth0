import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_error__ } from './auth0_token_error__.js'
const localStorage_key = 'auth0_token_json'
/** @type {import('./auth0_token_json__.d.ts').auth0_token_json__} */
export const auth0_token_json__ = be_('auth0_token_json__', ctx=>{
	const auth0_token_json_ = atom_(has_dom && localStorage.getItem(localStorage_key) || null)
	auth0_token_error__(ctx).subscribe($error=>{
		if ($error) auth0_token_json_.$ = 'null'
	})
	if (has_dom) {
		auth0_token_json_.listen($=>
			localStorage.setItem(localStorage_key, $))
	}
	return auth0_token_json_
})
export {
	auth0_token_json__ as auth0_token_json$_
}
