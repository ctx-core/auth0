import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'auth0_token_error$'
/** @type {import('auth0_token_error$_.d.ts').auth0_token_error$_} */
export const auth0_token_error$_ = be_(key, ()=>{
	const auth0_token_error$ = atom$(undefined)
	return auth0_token_error$
})
