import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {import('auth0_opened__.d.ts').auth0_opened__} */
export const auth0_opened__ = be_('auth0_opened__', ()=>
	atom_(null))
export function open_auth0_change_password(ctx) {
	auth0_opened__(ctx).$ = 'change_password'
}
