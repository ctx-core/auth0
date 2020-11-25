import { _b } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived } from '@ctx-core/store'
import { auth0_opened_b } from './auth0_opened_b'
export const auth0_closed_b = _b('auth0_closed', ctx=>
	derived(auth0_opened_b(ctx),
		_eql(false)
	))
export {
	auth0_closed_b as b__closed__auth0,
}
