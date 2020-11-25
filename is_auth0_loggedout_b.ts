import { _b } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived } from '@ctx-core/store'
import { auth0_token_b } from './auth0_token_b'
export const is_auth0_loggedout_b = _b('is_auth0_loggedout', ctx=>
	derived(
		auth0_token_b(ctx),
		_eql(false)
	))
export {
	is_auth0_loggedout_b as b__is__loggedout__auth0,
}
