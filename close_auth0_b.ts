import { _b } from '@ctx-core/object'
import { auth0_opened_b } from './auth0_opened_b'
export const close_auth0_b = _b(
	'close_auth0', (ctx)=>{
		const auth0_opened = auth0_opened_b(ctx)
		return function close_auth0() {
			auth0_opened.set(false)
		}
	})
