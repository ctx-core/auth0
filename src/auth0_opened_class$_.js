import { be_ } from '@ctx-core/object'
import { I } from '@ctx-core/combinators'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_opened$_ } from './auth0_opened$_.js'
const key = 'auth0_opened_class$'
/** @type {import('./auth0_opened_class$_').auth0_opened_class$_} */
export const auth0_opened_class$_ = be_(key, ctx=>
	computed$(auth0_opened$_(ctx), I
	))
