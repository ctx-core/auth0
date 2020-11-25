import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import type { Token } from '@ctx-core/jwt'
import { auth0_userinfo_b } from './auth0_userinfo_b'
export const auth0_email_b = _b('auth0_email', ctx=>
	derived(
		auth0_userinfo_b(ctx),
		$auth0_userinfo=>
			($auth0_userinfo == false)
			? false
			: $auth0_userinfo && ($auth0_userinfo as Token).email))
export {
	auth0_email_b as b__email__auth0,
	auth0_email_b as b__email,
}
