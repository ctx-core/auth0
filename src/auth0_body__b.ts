import { _b, assign } from '@ctx-core/object'
import { AUTH0_CLIENT_ID$_b } from './AUTH0_CLIENT_ID$_b'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
export function auth0_body__b</*@formatter:off*/
	Ctx extends object,
	Key extends keyof Ctx,
	Out extends auth0_client_id_body_I = auth0_client_id_body_I,
/*@formatter:on*/>(ctx:Ctx, key:Key) {
	return _b<Ctx, Key, auth0_body__T<Out>>(key, ()=>{
		const AUTH0_CLIENT_ID$ = AUTH0_CLIENT_ID$_b(ctx)
		return auth0_body_ as auth0_body__T<Out>
		function auth0_body_(data:auth0_client_id_optional_body_I) {
			return assign(
				{ client_id: AUTH0_CLIENT_ID$._ } as Out,
				data
			) as unknown as Out
		}
	})(ctx)
}
export type auth0_body__T</*@formatter:off*/
	Out extends auth0_client_id_body_I = auth0_client_id_body_I
/*@formatter:on*/> = (body:auth0_client_id_optional_body_I)=>Out
export {
	auth0_body__b as _auth0_body_b
}
