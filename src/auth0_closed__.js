import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened__ } from './auth0_opened__.js'
/** @type {import('auth0_closed__.d.ts').auth0_closed__} */
export const auth0_closed__ = be_('auth0_closed__', ctx=>
	computed_(auth0_opened__(ctx),
		$=>$ === null))
export { auth0_closed__ as auth0_closed$_ }
