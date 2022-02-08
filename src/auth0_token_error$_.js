import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened$_ } from './auth0_opened$_.js'
/** @type {import('auth0_token_error$_.d.ts').auth0_token_error$_} */
export const auth0_token_error$_ = be_('auth0_token_error$', ctx=>{
	const auth0_token_error$ = atom$(null)
	let auth0_opened
	auth0_opened$_(ctx).subscribe($=>{
		if (auth0_opened !== $) {
			auth0_opened = $
			auth0_token_error$.$ = null
		}
	})
	return auth0_token_error$
})
