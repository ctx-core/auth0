import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'AUTH0_URL$'
/** @type {import('./AUTH0_URL$_.d.ts').AUTH0_URL$_} */
export const AUTH0_URL$_ = be_(key, ()=>
	atom$(process.env.AUTH0_URL))
