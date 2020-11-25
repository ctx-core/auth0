import { _b } from '@ctx-core/object'
import type { falsy } from '@ctx-core/function'
import { set_auth0_token_b } from './set_auth0_token_b'
export const clear_auth0_token_b = _b(
	'clear_auth0_token', (ctx)=>{
		const set_auth0_token = set_auth0_token_b(ctx)
		return function clear_auth0_token(value:falsy = null) {
			set_auth0_token(value)
		}
	})
