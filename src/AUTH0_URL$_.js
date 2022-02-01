import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('./AUTH0_URL$_.d.ts').AUTH0_URL$_} */
export const AUTH0_URL$_ = be_('AUTH0_URL$', ()=>
	atom$(process.env.AUTH0_URL))
