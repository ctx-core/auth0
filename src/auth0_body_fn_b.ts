import { _b, assign } from '@ctx-core/object'
import { AUTH0_CLIENT_ID_b } from './AUTH0_CLIENT_ID_b'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
export function auth0_body_fn_b</*@formatter:off*/
	Ctx extends object,
	Key extends keyof Ctx,
	Out extends auth0_client_id_body_I = auth0_client_id_body_I,
/*@formatter:on*/>(ctx:Ctx, key:Key) {
	return _b<Ctx, Key, auth0_body_fn_T<Out>>(key, ()=>{
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		return _auth0_body as auth0_body_fn_T<Out>
		function _auth0_body(data:auth0_client_id_optional_body_I) {
			return assign(
				{ client_id: AUTH0_CLIENT_ID.$ } as Out,
				data
			) as unknown as Out
		}
	})(ctx)
}
export type auth0_body_fn_T</*@formatter:off*/
	Out extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/> = (body:auth0_client_id_optional_body_I)=>Out
export {
	auth0_body_fn_b as _auth0_body_b
}
