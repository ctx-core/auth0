import { _b } from '@ctx-core/object'
import { auth0_token_json_b } from './auth0_token_json_b'
export const set_auth0_token_b = _b(
	'set_auth0_token', (ctx)=>{
		const auth0_token_json = auth0_token_json_b(ctx)
		return function set_auth0_token(auth0_token) {
			auth0_token_json.set(JSON.stringify(auth0_token))
		}
	})
