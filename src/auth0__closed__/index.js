import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('./index.d.ts').auth0__closed__} */
export const auth0__closed__ = be_('auth0__closed__',
	ctx=>computed_(auth0__opened__(ctx),
		$=>$ === null))
export {
	auth0__closed__ as auth0_closed__,
	auth0__closed__ as auth0_closed$_, 
}
