import { _b, assign } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { AUTH0_CLIENT_ID_b } from './AUTH0_CLIENT_ID_b'
export const _auth0_body_b = _b(
	'_auth0_body', (ctx)=>{
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		return function _auth0_body(...form) {
			return assign({ client_id: get(AUTH0_CLIENT_ID) }, ...form)
		}
	})
