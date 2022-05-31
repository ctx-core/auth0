import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token__ } from './auth0_token__.js'
/** @type {import('./is_auth0_loggedout__.d.ts').is_auth0_loggedout__} */
export const is_auth0_loggedout__ = be_('is_auth0_loggedout__', ctx=>
	computed_(auth0_token__(ctx),
		$=>$ === null))
