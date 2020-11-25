import { _b } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
export const open_auth0_forgot_password_b = _b(
	'open_auth0_forgot_password', (ctx)=>{
		const auth0_opened = auth0_opened_b(ctx)
		return function open_auth0_forgot_password() {
			auth0_opened.set('forgot_password')
		}
	})
