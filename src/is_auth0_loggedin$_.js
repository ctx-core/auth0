import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token$_ } from './auth0_token$_.js'
/** @type {import('./is_auth0_loggedin$_.d.ts').is_auth0_loggedin$_} */
export const is_auth0_loggedin$_ = be_('is_auth0_loggedin$', ctx=>
	computed_(auth0_token$_(ctx),
		$=>!!$))
