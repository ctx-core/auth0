import { _b } from '@ctx-core/object'
import { _eq } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { auth0_opened_b} from './auth0_opened_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_change_password_opened'
export const auth0_change_password_opened_b = _b<auth0_Ctx, typeof key>(key, ctx=>
	derived(auth0_opened_b(ctx),
		_eq('change_password')
	) as auth0_change_password_opened_T)
export type $auth0_change_password_opened_T = boolean
export interface auth0_change_password_opened_T extends Readable<$auth0_change_password_opened_T> {}
export {
	auth0_change_password_opened_b as b__opened__change_password,
}
