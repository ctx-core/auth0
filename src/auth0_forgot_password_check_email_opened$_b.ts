import { eq_ } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { auth0_opened_T, auth0_opened$_b } from './auth0_opened$_b.js'
import type { auth0_Ctx } from './auth0_Ctx.js'
const key = 'auth0_forgot_password_check_email_opened$'
export const auth0_forgot_password_check_email_opened$_b:B<auth0_Ctx, typeof key> = be_(key, (
	ctx
)=>
	derived$(auth0_opened$_b(ctx),
		eq_<auth0_opened_T>('forgot_password_check_email')
	) as auth0_forgot_password_check_email_opened$_T)
export type auth0_forgot_password_check_email_opened_T = boolean
export interface auth0_forgot_password_check_email_opened$_T extends Readable$<auth0_forgot_password_check_email_opened_T> {}
export {
	auth0_forgot_password_check_email_opened$_b as b__opened__forgot_password_check_email,
}
