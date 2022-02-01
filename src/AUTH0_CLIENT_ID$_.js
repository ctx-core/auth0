import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('./AUTH0_CLIENT_ID$_.d.ts').AUTH0_CLIENT_ID$_} */
export const AUTH0_CLIENT_ID$_ = be_('AUTH0_CLIENT_ID$', ()=>
	atom$(process.env.AUTH0_CLIENT_ID))
