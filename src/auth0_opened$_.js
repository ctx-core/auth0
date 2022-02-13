import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {import('auth0_opened$_.d.ts').auth0_opened$_} */
export const auth0_opened$_ = be_('auth0_opened$', ()=>
	atom$(null))
export function open_auth0_change_password(ctx) {
	auth0_opened$_(ctx).$ = 'change_password'
}
