import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_email$_ } from './auth0_email$_.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {import('auth0_opened$_.d.ts').auth0_opened$_} */
export const auth0_opened$_ = be_('auth0_opened$', ctx=>{
	/** @type {import('auth0_opened$_.d.ts').auth0_opened$_T} */
	const auth0_opened$ = atom$(null)
	auth0_email$_(ctx).listen(()=>auth0_opened$.$ = null)
	return auth0_opened$
})
export function open_auth0_change_password(ctx) {
	auth0_opened$_(ctx).$ = 'change_password'
}
