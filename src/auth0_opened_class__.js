import { be_ } from '@ctx-core/object'
import { I } from '@ctx-core/combinators'
import { computed_ } from '@ctx-core/nanostores'
import { auth0_opened__ } from './auth0_opened__.js'
/** @type {import('./auth0_opened_class__').auth0_opened_class__} */
export const auth0_opened_class__ = be_('auth0_opened_class__', ctx=>
	computed_(auth0_opened__(ctx), I))
export { auth0_opened_class__ as auth0_opened_class$_ }
