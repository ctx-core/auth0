import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').AUTH0_DOMAIN__} */
export const AUTH0_DOMAIN__ = be_('AUTH0_DOMAIN__',
	()=>atom_(process.env.AUTH0_DOMAIN))
export { AUTH0_DOMAIN__ as AUTH0_DOMAIN$_ }
