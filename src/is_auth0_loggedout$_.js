import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token$_ } from './auth0_token$_.js'
const key = 'is_auth0_loggedout$'
/** @type {import('./is_auth0_loggedout$_.d.ts').is_auth0_loggedout$_} */
export const is_auth0_loggedout$_ = be_(key, ctx=>
	computed$(auth0_token$_(ctx),
		auth0_token=>auth0_token === null
	))
