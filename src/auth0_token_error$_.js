import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('auth0_token_error$_.d.ts').auth0_token_error$_} */
export const auth0_token_error$_ = be_('auth0_token_error$', ()=>{
	const auth0_token_error$ = atom$(undefined)
	return auth0_token_error$
})
