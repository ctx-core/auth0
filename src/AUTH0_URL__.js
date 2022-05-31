import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('./AUTH0_URL__.d.ts').AUTH0_URL__} */
export const AUTH0_URL__ = be_('AUTH0_URL__', ()=>
	atom_(process.env.AUTH0_URL))
export { AUTH0_URL__ as AUTH0_URL$_ }
