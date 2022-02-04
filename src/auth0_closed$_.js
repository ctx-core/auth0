import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened$_ } from './auth0_opened$_.js'
/** @type {import('auth0_closed$_.d.ts').auth0_closed$_} */
export const auth0_closed$_ = be_('auth0_closed$', ctx=>
	computed$(auth0_opened$_(ctx),
		$=>$ === null))
export {
	auth0_closed$_ as b__closed__auth0,
}
