import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'AUTH0_CLIENT_ID$'
/** @type {import('./AUTH0_CLIENT_ID$_.d.ts').AUTH0_CLIENT_ID$_} */
export const AUTH0_CLIENT_ID$_ = be_(key, ()=>
	atom$(process.env.AUTH0_CLIENT_ID))
