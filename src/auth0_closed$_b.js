import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_closed$'
/** @type {import('auth0_closed$_b.d.ts').auth0_closed$_b} */
export const auth0_closed$_b = be_(key, ctx=>
	computed$(auth0_opened$_b(ctx),
		auth0_opened=>
			auth0_opened === null
	))
export {
	auth0_closed$_b as b__closed__auth0,
}
