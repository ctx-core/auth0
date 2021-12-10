import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_opened$_b } from './auth0_opened$_b.js'
const key = 'auth0_forgot_password_opened$'
export const auth0_forgot_password_opened$_b:B<auth0_forgot_password_opened$_T> = be_(key, ctx=>
	derived$(auth0_opened$_b(ctx),
		auth0_opened=>
			auth0_opened == 'forgot_password.js'
	) as auth0_forgot_password_opened$_T)
export type auth0_forgot_password_opened$_T = Readable$<boolean>
export {
	auth0_forgot_password_opened$_b as b__opened__forgot_password,
}
