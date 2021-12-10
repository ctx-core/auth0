import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'AUTH0_URL$'
export const AUTH0_URL$_b:B<AUTH0_URL$_T> = be_(key, ()=>
	writable$(process.env.AUTH0_URL as string) as AUTH0_URL$_T)
export type AUTH0_URL$_T = Writable$<string>
export {
	AUTH0_URL$_b as b__AUTH0_URL,
}
