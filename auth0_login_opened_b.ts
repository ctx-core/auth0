import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b } from './auth0_opened_b'
export const auth0_login_opened_b:auth0_login_opened_b_type = _b('auth0_login_opened', ctx=>
	derived(auth0_opened_b(ctx),
		$auth0_login_opened=>
			!$auth0_login_opened
			|| $auth0_login_opened == 'login'
	) as auth0_login_opened_type
)
export type $auth0_login_opened_type = boolean
export interface auth0_login_opened_type extends Readable<$auth0_login_opened_type> {}
export interface auth0_login_opened_b_type extends B<auth0_login_opened_type> {}
export {
	auth0_login_opened_b as login_opened
}
