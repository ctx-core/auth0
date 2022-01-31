import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'AUTH0_DOMAIN$'
/** @type {import('./AUTH0_DOMAIN$_.d.ts').AUTH0_DOMAIN$_} */
export const AUTH0_DOMAIN$_ = be_(key, ()=>
	atom$(''))
export {
	AUTH0_DOMAIN$_ as b__AUTH0_DOMAIN,
}
