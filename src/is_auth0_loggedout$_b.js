import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_token$_b } from './auth0_token$_b.js'
const key = 'is_auth0_loggedout$'
/** @type {import('./is_auth0_loggedout$_b.d.ts').is_auth0_loggedout$_b} */
export const is_auth0_loggedout$_b = be_(key, ctx=>
	computed$(auth0_token$_b(ctx),
		(auth0_token)=>auth0_token === null
	))
export { is_auth0_loggedout$_b as b__is__loggedout__auth0, }
