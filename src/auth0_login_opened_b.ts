import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b, auth0_opened_ctx_I } from './auth0_opened_b'
const key = 'auth0_login_opened'
export interface auth0_login_opened_ctx_I
	extends auth0_opened_ctx_I {
	auth0_login_opened?:auth0_login_opened_T
}
export const auth0_login_opened_b = _b<auth0_login_opened_ctx_I, typeof key>(key, ctx=>
	(derived(auth0_opened_b(ctx),
		$auth0_login_opened=>
			!$auth0_login_opened
			|| $auth0_login_opened == 'login'
	) as auth0_login_opened_T))
export type $auth0_login_opened_T = boolean
export interface auth0_login_opened_T extends Readable<$auth0_login_opened_T> {}
export {
	auth0_login_opened_b as login_opened
}
