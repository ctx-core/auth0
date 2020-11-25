import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { auth0_opened_b } from './auth0_opened_b'
export const auth0_login_opened_b = _b('auth0_login_opened', ctx=>
	derived(auth0_opened_b(ctx),
		$auth0_login_opened=>
			!$auth0_login_opened
			|| $auth0_login_opened == 'login'))
export {
	auth0_login_opened_b as login_opened
}
