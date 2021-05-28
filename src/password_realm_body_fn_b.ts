import { _b, assign } from '@ctx-core/object'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I'
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I'
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
export function password_realm_body_fn_b</*@formatter:off*/
	Ctx extends object,
	Key extends keyof Ctx,
	Out extends password_realm_body_T = password_realm_body_T
/*@formatter:on*/>(
	ctx:Ctx, key:Key, auth0_body_fn:(body:auth0_client_id_optional_body_I)=>Out
) {
	return _b<Ctx, Key, password_realm_body_fn_T<Out>>(key, ()=>{
		return _password_realm_body as password_realm_body_fn_T<Out>
		function _password_realm_body(data:Partial<Out>) {
			const password_realm_body =
				auth0_body_fn(
					assign({
						grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
						realm: 'Username-Password-Authentication',
						connection: 'Username-Password-Authentication',
						data
					} as auth0_client_id_optional_body_I)) as Out
			return password_realm_body
		}
	})(ctx)
}
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
	realm:string
	connection:string
}
export type password_realm_body_fn_T<Out extends password_realm_body_T = password_realm_body_T> =
	(data:Partial<Out>)=>Out
export {
	password_realm_body_fn_b as _password_realm_body_b
}
