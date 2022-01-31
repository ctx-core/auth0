import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token$_ } from './auth0_token$_.js'
const key = 'is_auth0_loggedin$'
/** @type {import('./is_auth0_loggedin$_.d.ts').is_auth0_loggedin$_} */
export const is_auth0_loggedin$_ = be_(key, ctx=>
	computed$(auth0_token$_(ctx),
		auth0_token=>!!auth0_token
	))
