import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('./index.d.ts').auth0__login__opened__} */
export const auth0__login__opened__ = be_('auth0__login__opened__',
	ctx=>
		computed_(auth0__opened__(ctx),
			$=>!$ || $ === 'login'))
export {
	auth0__login__opened__ as auth0_login_opened__,
	auth0__login__opened__ as auth0_login_opened$_,
}
