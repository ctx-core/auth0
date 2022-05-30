import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token$_ } from './auth0_token$_.js'
/** @type {import('./is_auth0_loggedout$_.d.ts').is_auth0_loggedout$_} */
export const is_auth0_loggedout$_ = be_('is_auth0_loggedout$', ctx=>
	computed_(auth0_token$_(ctx),
		$=>$ === null))
