import { eq_ } from '@ctx-core/function'
import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_signup_opened$'
/** @type {import('./auth0_signup_opened$_b.d.ts').auth0_signup_opened$_b} */
export const auth0_signup_opened$_b = be_(key, ctx=>
	computed$(auth0_opened$_b(ctx), eq_('signup'))
)
export { auth0_signup_opened$_b as b__opened__signup, }
