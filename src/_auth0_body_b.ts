import { _b, assign } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { AUTH0_CLIENT_ID_b } from './AUTH0_CLIENT_ID_b'
import type { auth0_client_id_body_type, auth0_client_id_optional_body_type } from './auth0_client_id_body_type'
export function _auth0_body_b<I extends auth0_client_id_optional_body_type = auth0_client_id_optional_body_type,
	O extends auth0_client_id_body_type = auth0_client_id_body_type>(ctx) {
	return _b('_auth0_body', (ctx)=>{
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		return _auth0_body as _auth0_body_type<I, O>
		function _auth0_body(data:I) {
			return assign(
				{ client_id: get(AUTH0_CLIENT_ID) } as auth0_client_id_body_type,
				data
			) as unknown as O
		}
	})(ctx)
}
export type _auth0_body_type<I extends auth0_client_id_optional_body_type = auth0_client_id_optional_body_type,
	O extends auth0_client_id_body_type = auth0_client_id_body_type> =
	(body:I)=>O
