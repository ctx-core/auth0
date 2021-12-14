import { be_, assign, Ctx } from '@ctx-core/object'
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I.js'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I.js'
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I.js'
export function password_realm_body__b<Out extends password_realm_body_T = password_realm_body_T>(
	ctx:Ctx, key:string, auth0_body_fn:(body:auth0_client_id_optional_body_I)=>Out
):password_realm_body__T<Out> {
	return be_<password_realm_body__T<Out>>(key, ()=>{
		return password_realm_body_ as password_realm_body__T<Out>
		function password_realm_body_(data:Partial<Out>) {
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
export type password_realm_body__T<Out extends password_realm_body_T = password_realm_body_T> =
	(data:Partial<Out>)=>Out
export {
	password_realm_body__b as _password_realm_body_b
}
