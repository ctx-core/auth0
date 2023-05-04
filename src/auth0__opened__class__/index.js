import { I } from '@ctx-core/combinators'
import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	auth0__opened__class__,
	auth0__opened__class_,
] = be_computed_pair_(ctx=>
	computed_(
		auth0__opened__(ctx), I))
export {
	auth0__opened__class__ as auth0_opened_class__,
	auth0__opened__class__ as auth0_opened_class$_,
}
