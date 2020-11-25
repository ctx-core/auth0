import { _b } from '@ctx-core/object'
import { _eq } from '@ctx-core/function'
import { derived } from '@ctx-core/store'
import { auth0_opened_b } from './auth0_opened_b'
export const auth0_forgot_password_opened_b = _b('auth0_forgot_password_opened', ctx=>
	derived(auth0_opened_b(ctx),
		_eq('forgot_password')))
export {
	auth0_forgot_password_opened_b as b__opened__forgot_password,
}
