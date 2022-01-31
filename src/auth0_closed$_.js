import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened$_ } from './auth0_opened$_.js'
const key = 'auth0_closed$'
/** @type {import('auth0_closed$_.d.ts').auth0_closed$_} */
export const auth0_closed$_ = be_(key, ctx=>
	computed$(auth0_opened$_(ctx),
		auth0_opened=>
			auth0_opened === null
	))
export {
	auth0_closed$_ as b__closed__auth0,
}
