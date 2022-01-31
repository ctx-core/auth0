import { has_dom } from '@ctx-core/dom'
import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'auth0_token_json$'
/** @type {import('./auth0_token_json$_.d.ts').auth0_token_json$_} */
export const auth0_token_json$_ = be_(key, ()=>
	atom$(has_dom && localStorage.getItem(key) || null)
)
