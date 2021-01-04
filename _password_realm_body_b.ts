import { _b, assign, B } from '@ctx-core/object'
import { _auth0_body_b } from './_auth0_body_b'
import type { auth0_client_id_body_type } from './auth0_client_id_body_type'
import type { auth0_grant_type_body_type } from './auth0_grant_type_body_type'
export function _password_realm_body_b<O extends password_realm_body_type = password_realm_body_type>(ctx) {
	return _b('_password_realm_body', (ctx)=>{
		const _auth0_body = _auth0_body_b(ctx)
		return _password_realm_body as _password_realm_body_type<O>
		function _password_realm_body(data:Partial<O>) {
			const password_realm_body =
				_auth0_body(
					assign({
						grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
						realm: 'Username-Password-Authentication',
						connection: 'Username-Password-Authentication',
						data
					})) as O
			return password_realm_body as O
		}
	})(ctx)
}
export interface password_realm_body_type extends auth0_grant_type_body_type, auth0_client_id_body_type {
	grant_type:string
	realm:string
	connection:string
}
export type _password_realm_body_type<O extends password_realm_body_type = password_realm_body_type> =
	(data:Partial<O>)=>O
export interface _password_realm_body_b_type<O extends password_realm_body_type = password_realm_body_type>
	extends B<_password_realm_body_type<O>> {}
