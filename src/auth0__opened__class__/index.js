import { be_ } from '@ctx-core/object'
import { I } from '@ctx-core/combinators'
import { computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('./index.d.ts').auth0__opened__class__} */
export const auth0__opened__class__ = be_('auth0__opened__class__',
	ctx=>computed_(
		auth0__opened__(ctx), I))
export {
	auth0__opened__class__ as auth0_opened_class__,
	auth0__opened__class__ as auth0_opened_class$_,
}
