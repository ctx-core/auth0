import { _b, assign } from '@ctx-core/object'
import { AUTH0_CLIENT_ID_b } from './AUTH0_CLIENT_ID_b'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
export function _auth0_body_b</*@formatter:off*/
	Ctx extends object,
	In extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	Out extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/>(
	ctx:Ctx,
	_key:(base:string)=>keyof Ctx
) {
	const _auth0_body_key = _key('_auth0_body')
	return _b<Ctx, typeof _auth0_body_key, _auth0_body_T<In, Out>>(_auth0_body_key, ()=>{
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		return _auth0_body as _auth0_body_T<In, Out>
		function _auth0_body(data:In) {
			return assign(
				{ client_id: AUTH0_CLIENT_ID.$ } as Out,
				data
			) as unknown as Out
		}
	})(ctx)
}
export type _auth0_body_T</*@formatter:off*/
	In extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	Out extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/> = (body:In)=>Out
