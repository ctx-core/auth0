import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('./AUTH0_CLIENT_ID__.d.ts').AUTH0_CLIENT_ID__} */
export const AUTH0_CLIENT_ID__ = be_('AUTH0_CLIENT_ID__', ()=>
	atom_(process.env.AUTH0_CLIENT_ID))
export {
	AUTH0_CLIENT_ID__ as AUTH0_CLIENT_ID$_
}
