import { _b, assign } from '@ctx-core/object'
import { AUTH0_CLIENT_ID_b, AUTH0_CLIENT_ID_Ctx } from './AUTH0_CLIENT_ID_b'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
const key = '_auth0_body'
export interface _auth0_body_Ctx</*@formatter:off*/
	I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	O extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/>
	extends AUTH0_CLIENT_ID_Ctx {
	_auth0_body?:_auth0_body_T<I, O>
}
export function _auth0_body_b</*@formatter:off*/
	I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	O extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/>(ctx:_auth0_body_Ctx<I, O>) {
	return _b<_auth0_body_Ctx<I, O>, typeof key>(key, ()=>{
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		return _auth0_body as _auth0_body_T<I, O>
		function _auth0_body(data:I) {
			return assign(
				{ client_id: AUTH0_CLIENT_ID.$ } as O,
				data
			) as unknown as O
		}
	})(ctx)
}
export type _auth0_body_T</*@formatter:off*/
	I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	O extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/> = (body:I)=>O
