import { has_dom } from '@ctx-core/dom'
import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('./auth0_token_json$_.d.ts').auth0_token_json$_} */
export const auth0_token_json$_ = be_('auth0_token_json$', ()=>
	atom$(has_dom && localStorage.getItem('auth0_token_json$') || null))
