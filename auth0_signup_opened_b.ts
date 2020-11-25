import { _b } from '@ctx-core/object'
import { _eq } from '@ctx-core/function'
import { derived } from '@ctx-core/store'
import { auth0_opened_b } from './auth0_opened_b'
export const auth0_signup_opened_b = _b('auth0_signup_opened', ctx=>
	derived(auth0_opened_b(ctx),
		_eq('signup')))
export {
	auth0_signup_opened_b as b__opened__signup,
}
