import { be_, assign, Ctx } from '@ctx-core/object'
import { AUTH0_CLIENT_ID$_b } from './AUTH0_CLIENT_ID$_b.js'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I.js'
export function auth0_body__b</*@formatter:off*/
	Out extends auth0_client_id_body_I = auth0_client_id_body_I,
/*@formatter:on*/>(ctx:Ctx, key:string) {
	return be_<auth0_body__T>(key, ()=>{
		const AUTH0_CLIENT_ID$ = AUTH0_CLIENT_ID$_b(ctx)
		return auth0_body_ as auth0_body__T<Out>
		function auth0_body_(data:auth0_client_id_optional_body_I) {
			return assign(
				{ client_id: AUTH0_CLIENT_ID$.$ } as Out,
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
