import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('./index.d.ts').auth0__change_password__opened__} */
export const auth0__change_password__opened__ = be_(
	'auth0__change_password__opened__',
	ctx=>
		computed_(auth0__opened__(ctx),
			$=>$ === 'change_password'))
export {
	auth0__change_password__opened__ as auth0_change_password_opened__,
	auth0__change_password__opened__ as auth0_change_password_opened$_,
}
