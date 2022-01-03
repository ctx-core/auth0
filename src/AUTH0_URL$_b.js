import { be_ } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
const key = 'AUTH0_URL$'
/** @type {import('./AUTH0_URL$_b.d.ts').AUTH0_URL$_b} */
export const AUTH0_URL$_b = be_(key, ()=>atom$(process.env.AUTH0_URL)
)
export { AUTH0_URL$_b as b__AUTH0_URL, }
