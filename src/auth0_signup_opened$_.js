import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened$_ } from './auth0_opened$_.js'
const key = 'auth0_signup_opened$'
/** @type {import('./auth0_signup_opened$_.d.ts').auth0_signup_opened$_} */
export const auth0_signup_opened$_ = be_(key, ctx=>
	computed$(auth0_opened$_(ctx),
		auth0_opened=>auth0_opened == 'signup')
)
