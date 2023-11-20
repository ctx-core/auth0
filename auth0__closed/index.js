import { be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened/index.js'
export const [
	auth0__closed$_,
	auth0__closed_,
] = be_computed_pair_(ctx=>auth0__opened$_(ctx),
	auth0__opened=>auth0__opened === null,
	{ id: 'auth0__closed' })
export {
	auth0__closed$_ as auth0__closed__,
	auth0__closed$_ as auth0_closed__,
	auth0__closed$_ as auth0_closed$_,
}
