import { I } from '@ctx-core/combinators'
import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened/index.js'
export const [
	auth0__opened__class$_,
	auth0__opened__class_,
] = be_computed_pair_(ctx=>
	computed_(
		auth0__opened$_(ctx), I))
export {
	auth0__opened__class$_ as auth0__opened__class__,
	auth0__opened__class$_ as auth0_opened_class__,
	auth0__opened__class$_ as auth0_opened_class$_,
}
