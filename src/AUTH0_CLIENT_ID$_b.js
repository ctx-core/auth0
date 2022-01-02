import { be_ } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
const key = 'AUTH0_CLIENT_ID$'
/** @type {import('./AUTH0_CLIENT_ID$_b.d.ts').AUTH0_CLIENT_ID$_b} */
export const AUTH0_CLIENT_ID$_b = be_(key, (_ctx)=>
	atom$(process.env.AUTH0_CLIENT_ID))
export {
	AUTH0_CLIENT_ID$_b as b__AUTH0_CLIENT_ID
}
