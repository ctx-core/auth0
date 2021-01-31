import { _b, B } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b } from './auth0_opened_b'
export const auth0_closed_b:auth0_closed_b_type = _b('auth0_closed', ctx=>
	derived(auth0_opened_b(ctx),
		_eql(false)
	) as auth0_closed_type
)
export type $auth0_closed_type = boolean
export interface auth0_closed_type extends Readable<$auth0_closed_type> {}
export interface auth0_closed_b_type extends B<auth0_closed_type> {}
export {
	auth0_closed_b as b__closed__auth0,
}
