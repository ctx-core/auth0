import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('./AUTH0_DOMAIN$_.d.ts').AUTH0_DOMAIN$_} */
export const AUTH0_DOMAIN$_ = be_('AUTH0_DOMAIN$', ()=>
	atom$(process.env.AUTH0_DOMAIN))
