import { be_ } from '@ctx-core/object'
import { I } from '@ctx-core/combinators'
import { computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').auth0__opened__class__} */
export const auth0__opened__class__ = be_('auth0__opened__class__',
	ctx=>computed_(
		auth0__opened__(ctx), I))
export {
	auth0__opened__class__ as auth0_opened_class__,
	auth0__opened__class__ as auth0_opened_class$_,
}
/**
 * @param {Ctx}ctx
 * @returns {import('../auth0__opened__').auth0__opened_T}
 */
export function auth0__opened__class_(ctx) {
	return auth0__opened__class__(ctx).$
}
