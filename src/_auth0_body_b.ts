import { _b, assign } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { AUTH0_CLIENT_ID_b, AUTH0_CLIENT_ID_ctx_I } from './AUTH0_CLIENT_ID_b'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
export function _auth0_body_b</*@formatter:off*/
	I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	O extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/>(ctx:_auth0_body_ctx_I<I, O>) {
	return _b('_auth0_body', ()=>{
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		return _auth0_body as _auth0_body_type<I, O>
		function _auth0_body(data:I) {
			return assign(
				{ client_id: get(AUTH0_CLIENT_ID) } as auth0_client_id_body_I,
				data
			) as unknown as O
		}
	})(ctx)
}
export interface _auth0_body_ctx_I</*@formatter:off*/
	I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	O extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/> extends AUTH0_CLIENT_ID_ctx_I {
	_auth0_body?:_auth0_body_type<I, O>
}
export type _auth0_body_type</*@formatter:off*/
	I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	O extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/> = (body:I)=>O
